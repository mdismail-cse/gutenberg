const { registerBlockBindingsSource } = wp.blocks;
const { useBlockBindingsUtils } = wp.blockEditor;
const { createElement } = wp.element;
const { fields } = window.testingBindings || {};

const getValues = ( { bindings } ) => {
	const newValues = {};
	for ( const [ attributeName, source ] of Object.entries( bindings ) ) {
		newValues[ attributeName ] = fields[ source.args.key ]?.value;
	}
	return newValues;
};
const setValues = ( { dispatch, bindings } ) => {
	Object.values( bindings ).forEach( ( { args, newValue } ) => {
		// Example of what could be done.
		dispatch( 'core' ).editEntityRecord( 'postType', 'post', 1, {
			meta: { [ args?.key ]: newValue },
		} );
	} );
};

registerBlockBindingsSource( {
	name: 'testing/complete-source',
	label: 'Complete Source',
	getValues,
	setValues,
	canUserEditValue: () => true,
	render: function TestingComponent( { attribute, binding } ) {
		const { FieldsList } = useBlockBindingsUtils();
		return createElement( FieldsList, {
			fields,
			source: 'testing/complete-source',
			attribute,
			currentBinding: binding,
		} );
	},
	getBindingLabel: ( { binding } ) => {
		return fields[ binding?.args?.key ]?.label;
	},
} );

registerBlockBindingsSource( {
	name: 'testing/can-user-edit-false',
	label: 'Can User Edit: False',
	getValues,
	setValues,
	canUserEditValue: () => false,
} );

registerBlockBindingsSource( {
	name: 'testing/can-user-edit-undefined',
	label: 'Can User Edit: Undefined',
	getValues,
	setValues,
} );

registerBlockBindingsSource( {
	name: 'testing/set-values-undefined',
	label: 'Set Values: Undefined',
	getValues,
	canUserEditValue: () => true,
} );
