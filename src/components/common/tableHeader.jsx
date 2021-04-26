import React, { Component } from 'react';

export default class TableHeader extends Component {
	sort = (path) => {
		const sortedColumn = { ...this.props.sortColumn };
		if (sortedColumn.path === path) {
			sortedColumn.order = sortedColumn.order === 'asc' ? 'desc' : 'asc';
		} else {
			sortedColumn.path = path;
			sortedColumn.order = 'asc';
		}
		this.props.onSort(sortedColumn);
	};

	renderSortIcon = (column) => {
		const { sortColumn } = this.props;

		if (column.path !== sortColumn.path) return null;
		if (sortColumn.order === 'asc') return <i className="fa fa-sort-asc"></i>;
		return <i className="fa fa-sort-desc"></i>;
	};
	render() {
		return (
			<thead>
				<tr>
					{this.props.columns.map((column) => (
						<th
							style={{ cursor: 'pointer' }}
							key={column.path || column.key}
							onClick={() => this.sort(column.path)}
						>
							{column.label} {this.renderSortIcon(column)}
						</th>
					))}
				</tr>
			</thead>
		);
	}
}
