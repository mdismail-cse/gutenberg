/**
 * WordPress dependencies
 */
import { useState, useMemo } from '@wordpress/element';

/**
 * Internal dependencies
 */
import DataViews from '../index';
import {
	DEFAULT_VIEW,
	actions,
	data,
	fields,
	themeData,
	themeFields,
} from './fixtures';
import { LAYOUT_GRID, LAYOUT_LIST, LAYOUT_TABLE } from '../../../constants';
import { filterSortAndPaginate } from '../../../filter-and-sort-data-view';
import type { CombinedField, View } from '../../../types';

import './style.css';

const meta = {
	title: 'DataViews/DataViews',
	component: DataViews,
};
export default meta;

const defaultLayouts = {
	[ LAYOUT_TABLE ]: {
		layout: {
			primaryField: 'title',
			styles: {
				image: {
					width: 50,
				},
				title: {
					maxWidth: 400,
				},
				type: {
					maxWidth: 400,
				},
				description: {
					maxWidth: 200,
				},
			},
		},
	},
	[ LAYOUT_GRID ]: {
		layout: {
			mediaField: 'image',
			primaryField: 'title',
		},
	},
	[ LAYOUT_LIST ]: {
		layout: {
			mediaField: 'image',
			primaryField: 'title',
		},
	},
};

export const Default = () => {
	const [ view, setView ] = useState< View >( {
		...DEFAULT_VIEW,
		fields: [ 'title', 'description', 'categories' ],
		layout: defaultLayouts[ DEFAULT_VIEW.type ].layout,
	} );
	const { data: shownData, paginationInfo } = useMemo( () => {
		return filterSortAndPaginate( data, view, fields );
	}, [ view ] );
	return (
		<DataViews
			getItemId={ ( item ) => item.id.toString() }
			paginationInfo={ paginationInfo }
			data={ shownData }
			view={ view }
			fields={ fields }
			onChangeView={ setView }
			actions={ actions }
			defaultLayouts={ defaultLayouts }
		/>
	);
};

export const Empty = () => {
	const [ view, setView ] = useState< View >( {
		...DEFAULT_VIEW,
		fields: [ 'title', 'description', 'categories' ],
	} );

	return (
		<DataViews
			getItemId={ ( item ) => item.id.toString() }
			paginationInfo={ { totalItems: 0, totalPages: 0 } }
			data={ [] }
			view={ view }
			fields={ fields }
			onChangeView={ setView }
			actions={ actions }
			defaultLayouts={ defaultLayouts }
		/>
	);
};

export const FieldsNoSortableNoHidable = () => {
	const [ view, setView ] = useState< View >( {
		...DEFAULT_VIEW,
		fields: [ 'title', 'description', 'categories' ],
	} );
	const { data: shownData, paginationInfo } = useMemo( () => {
		return filterSortAndPaginate( data, view, fields );
	}, [ view ] );

	const _fields = fields.map( ( field ) => ( {
		...field,
		enableSorting: false,
		enableHiding: false,
	} ) );

	return (
		<DataViews
			getItemId={ ( item ) => item.id.toString() }
			paginationInfo={ paginationInfo }
			data={ shownData }
			view={ view }
			fields={ _fields }
			onChangeView={ setView }
			defaultLayouts={ {
				table: {},
			} }
		/>
	);
};

export const CombinedFields = () => {
	const defaultLayoutsThemes = {
		table: {
			fields: [ 'theme_with_combined', 'theme_with_simple' ],
			layout: {
				primaryField: 'name',
				combinedFields: [
					{
						id: 'name_tested',
						label: 'Theme',
						children: [ 'name', 'tested' ],
						direction: 'vertical',
					},
					{
						id: 'theme_with_combined',
						label: 'Combine combined fields',
						children: [ 'icon', 'name_tested' ],
						direction: 'horizontal',
					},
					{
						id: 'theme_with_simple',
						label: 'Combine simple fields',
						children: [ 'icon', 'name' ],
						direction: 'horizontal',
					},
				] as CombinedField[],
				styles: {
					theme: {
						maxWidth: 300,
					},
				},
			},
		},
		grid: {
			fields: [ 'description', 'requires', 'tested' ],
			layout: { primaryField: 'name', columnFields: [ 'description' ] },
		},
		list: {
			fields: [ 'requires', 'tested' ],
			layout: { primaryField: 'name' },
		},
	};
	const [ view, setView ] = useState< View >( {
		...DEFAULT_VIEW,
		fields: defaultLayoutsThemes.table.fields,
		layout: defaultLayoutsThemes.table.layout,
	} );
	const { data: shownData, paginationInfo } = useMemo( () => {
		return filterSortAndPaginate( themeData, view, themeFields );
	}, [ view ] );

	return (
		<DataViews
			getItemId={ ( item ) => item.name }
			paginationInfo={ paginationInfo }
			data={ shownData }
			view={ view }
			fields={ themeFields }
			onChangeView={ setView }
			defaultLayouts={ defaultLayoutsThemes }
		/>
	);
};
