import React from 'react';
import TableHeader from './tableHeader';
import TableBody from './tableBody';

export default function Table({
	todos,
	sortColumn,
	onSort,
	onDelete,
	onComplete,
}) {
	const columns = [
		{
			path: 'id',
			label: 'Id',
		},
		{
			path: 'title',
			label: 'Title',
		},
		{ path: 'completed', label: 'Status' },
		{
			key: 'done',
			label: 'Complete',
		},
		{
			key: 'delete',
			label: 'Delete',
		},
	];
	return (
		<table className="table table-hover">
			<TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
			<TableBody todos={todos} onDelete={onDelete} onComplete={onComplete} />
		</table>
	);
}
