/**
 * WordPress dependencies
 */
const { test, expect } = require( '@wordpress/e2e-test-utils-playwright' );

test.describe( 'Template Activate', () => {
	test.beforeAll( async ( { requestUtils } ) => {
		await requestUtils.activateTheme( 'emptytheme' );
		await requestUtils.deleteAllTemplates( 'wp_template' );
		await requestUtils.deleteAllTemplates( 'wp_template_part' );
	} );
	test.afterAll( async ( { requestUtils } ) => {
		await requestUtils.deleteAllTemplates( 'wp_template' );
		await requestUtils.deleteAllTemplates( 'wp_template_part' );
		await requestUtils.activateTheme( 'twentytwentyone' );
	} );
	test.beforeEach( async ( { admin, requestUtils } ) => {
		await requestUtils.deleteAllTemplates( 'wp_template' );
		await admin.visitSiteEditor( { postType: 'wp_template' } );
	} );

	test( 'should duplicate and activate', async ( {
		page,
		admin,
		editor,
	} ) => {
		// Inside the grid cell, find the button with the text "Actions"
		const index = page.locator(
			'.dataviews-view-grid__card:has-text("Index")'
		);
		let actionsButton = index.getByRole( 'button', { name: 'Actions' } );
		await actionsButton.click();

		const duplicateButton = page.getByRole( 'menuitem', {
			name: 'Duplicate',
		} );
		await duplicateButton.click();

		await page.keyboard.press( 'Enter' );

		// Wait for the snackbar message.
		await page.waitForSelector( '.components-snackbar__content' );

		await admin.visitSiteEditor( {
			postType: 'wp_template',
			activeView: 'user',
		} );

		const indexCopy = page.locator(
			'.dataviews-view-grid__card:has-text("Index (Copy)")'
		);

		expect( await indexCopy.textContent() ).toContain( 'Inactive' );

		actionsButton = indexCopy.getByRole( 'button', {
			name: 'Actions',
		} );
		await actionsButton.click();

		const activateButton = page.getByRole( 'menuitem', {
			name: 'Activate',
		} );
		await activateButton.click();

		await page.waitForSelector(
			'.dataviews-view-grid__field-value .is-active'
		);

		await page.getByRole( 'button', { name: 'Index (Copy)' } ).click();

		await editor.insertBlock( {
			name: 'core/paragraph',
			attributes: { content: 'Copied from Index.' },
		} );

		await page.getByRole( 'button', { name: 'Save', exact: true } ).click();

		// Visit the front end.
		const previewButton = page.getByRole( 'button', {
			name: 'View',
			exact: true,
		} );

		await previewButton.click();

		const previewMenuItem = page.getByRole( 'menuitem', {
			name: 'View site',
		} );

		const [ previewPage ] = await Promise.all( [
			page.context().waitForEvent( 'page' ),
			previewMenuItem.click(),
		] );

		await expect( previewPage.locator( 'body' ) ).toContainText(
			'Copied from Index.'
		);

		await page.bringToFront();

		await page.getByRole( 'button', { name: 'Open Navigation' } ).click();

		await actionsButton.click();

		const deactivateButton = page.getByRole( 'menuitem', {
			name: 'Deactivate',
		} );
		await deactivateButton.click();

		await previewPage.bringToFront();
		await previewPage.reload();

		await expect( previewPage.locator( 'body' ) ).not.toContainText(
			'Copied from Index.'
		);
	} );
} );
