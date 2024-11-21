<?php

// How does this work?
// 1. For wp_template, we remove the custom templates controller, so it becomes
//    a normal posts endpoint, modified slightly to allow auto-drafts.
add_filter( 'register_post_type_args', 'gutenberg_modify_wp_template_post_type_args', 10, 2 );
function gutenberg_modify_wp_template_post_type_args( $args, $post_type ) {
	if ( 'wp_template' === $post_type ) {
		$args['rest_base']                       = 'wp_template';
		$args['rest_controller_class']           = 'Gutenberg_REST_Templates_Controller';
		$args['autosave_rest_controller_class']  = null;
		$args['revisions_rest_controller_class'] = null;
	}
	return $args;
}

// 2. We maintain the routes for /templates and /templates/lookup. I think we'll
//    need to deprecate /templates eventually, but we'll still want to be able
//    to lookup the active template for a specific slug, and probably get a list
//    of all _active_ templates. For that we can keep /lookup.
add_action( 'rest_api_init', 'gutenberg_maintain_templates_routes' );
function gutenberg_maintain_templates_routes() {
	// This should later be changed in core so we don't need initialise
	// WP_REST_Templates_Controller with a post type.
	global $wp_post_types;
	$wp_post_types['wp_template']->rest_base = 'templates';
	$controller                              = new Gutenberg_REST_Templates_Controller_6_7( 'wp_template' );
	$wp_post_types['wp_template']->rest_base = 'wp_template';
	$controller->register_routes();
}

// 3. We need a route to get that raw static templates from themes and plugins.
//    I registered this as a post type route because right now the
//    EditorProvider assumes templates are posts.
add_action( 'init', 'gutenberg_setup_static_template' );
function gutenberg_setup_static_template() {
	global $wp_post_types;
	$wp_post_types['_wp_static_template']                        = clone $wp_post_types['wp_template'];
	$wp_post_types['_wp_static_template']->name                  = '_wp_static_template';
	$wp_post_types['_wp_static_template']->rest_base             = '_wp_static_template';
	$wp_post_types['_wp_static_template']->rest_controller_class = 'Gutenberg_REST_Static_Templates_Controller';

	register_setting(
		'reading',
		'active_templates',
		array(
			'type'         => 'object',
			'show_in_rest' => array(
				'schema' => array(
					'type'                 => 'object',
					'additionalProperties' => true,
				),
			),
			'default'      => array(),
		)
	);
}

add_filter( 'pre_wp_unique_post_slug', 'gutenberg_allow_template_slugs_to_be_duplicated', 10, 5 );
function gutenberg_allow_template_slugs_to_be_duplicated( $override, $slug, $post_id, $post_status, $post_type ) {
	return 'wp_template' === $post_type ? $slug : $override;
}

add_filter( 'pre_get_block_templates', 'gutenberg_pre_get_block_templates', 10, 3 );
function gutenberg_pre_get_block_templates( $output, $query, $template_type ) {
	if ( 'wp_template' === $template_type && ! empty( $query['slug__in'] ) ) {
		$active_templates = get_option( 'active_templates', array() );
		$slugs            = $query['slug__in'];
		$output           = array();
		foreach ( $slugs as $slug ) {
			if ( isset( $active_templates[ $slug ] ) ) {
				if ( false !== $active_templates[ $slug ] ) {
					$post = get_post( $active_templates[ $slug ] );
					if ( $post ) {
						$output[] = _build_block_template_result_from_post( $post );
					}
				} else {
					// Deactivated template, fall back to next slug.
					$output[] = array();
				}
			}
		}
		if ( empty( $output ) ) {
			$output = null;
		}
	}
	return $output;
}

// Whenever templates are queried, include all templates, not just the ones with
// a matching theme. See:
// https://github.com/WordPress/wordpress-develop/blob/94a798b54b4be308cfafb2db09bbed9c3ea9ff34/src/wp-includes/block-template-utils.php#L1111-L1117
function gutenberg_remove_tax_query_for_templates( $query ) {
	if ( isset( $query->query['post_type'] ) && 'wp_template' === $query->query['post_type'] ) {
		$query->set( 'tax_query', array() );
	}
}

add_filter( 'pre_get_block_templates', 'gutenberg_tax_pre_get_block_templates', 10, 3 );
add_action( 'pre_get_block_template', 'gutenberg_tax_pre_get_block_templates', 10, 3 );
function gutenberg_tax_pre_get_block_templates( $output, $query, $template_type ) {
	// Do not remove the tax query when querying for a specific slug.
	if ( 'wp_template' === $template_type && ( is_numeric( $query ) || empty( $query['slug__in'] ) ) ) {
		add_action( 'pre_get_posts', 'gutenberg_remove_tax_query_for_templates' );
	}
	return $output;
}

add_filter( 'get_block_templates', 'gutenberg_tax_get_block_templates', 10, 3 );
add_action( 'get_block_template', 'gutenberg_tax_get_block_templates', 10, 3 );
function gutenberg_tax_get_block_templates( $output, $query, $template_type ) {
	if ( 'wp_template' === $template_type && ( is_numeric( $query ) || empty( $query['slug__in'] ) ) ) {
		remove_action( 'pre_get_posts', 'gutenberg_remove_tax_query_for_templates' );
	}
	return $output;
}

// Bypass the terms check in _build_block_template_result_from_post.
add_filter( 'get_the_terms', 'gutenberg_get_the_terms', 10, 3 );
function gutenberg_get_the_terms( $terms, $object_id, $taxonomy ) {
	if ( 'wp_theme' === $taxonomy ) {
		$stylesheet = get_stylesheet();
		return array(
			new WP_Term(
				(object) array(
					'term_id'  => 0,
					'name'     => $stylesheet,
					'slug'     => $stylesheet,
					'taxonomy' => 'wp_theme',
				)
			),
		);
	}
	return $terms;
}
