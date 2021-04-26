import React, { useState, useEffect } from 'react';
import Form from './form';
import StatusGroup from './common/statusGroup';
import Table from './common/table';
import Pagination from './common/pagination';
import ClearButton from './common/clearButton';
import SearchBox from './common/searchBox';
import { getRandomInt } from './common/random';
import { paginate } from './common/paginate';
import { getTodos } from '../service/todoService';
import _ from 'lodash';

export default function TodoList() {
	const [todoAdd, setTodoAdd] = useState('');
	const [todos, setTodos] = useState([]);
	const [pageSize, setPageSize] = useState(5);
	const [currentPage, setCurrentPage] = useState(1);
	const [searchQuery, setSearchQuery] = useState('');
	const [sortColumn, setSortColumn] = useState({
		path: 'title',
		order: 'asc',
	});
	const [currentStatus, setCurrentStatus] = useState({
		id: 1,
		name: 'All',
		value: null,
	});
	const status = [
		{ id: 1, name: 'All', value: null },
		{ id: 2, name: 'Completed', value: true },
		{ id: 3, name: 'Uncompleted', value: false },
	];

	useEffect(() => {
		async function getTodo() {
			const result = await getTodos();
			setTodos(result.data);
		}
		getTodo();
	}, []);

	const handleChange = (e) => {
		setTodoAdd(e.currentTarget.value);
		console.log(e.currentTarget.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setTodos([
			...todos,
			{ title: todoAdd, completed: false, id: getRandomInt(200, 250) },
		]);
		setTodoAdd('');
	};

	const handlePageChange = (page) => {
		setCurrentPage(page);
	};
	const handleStatusSelect = (statusClick) => {
		setCurrentStatus(statusClick);
		setCurrentPage(1);
	};

	const handleClearAllCompleted = () => {
		const clear = todos.filter((t) => t.completed === false);
		setTodos(clear);
		setCurrentPage(1);
	};

	const handleSortColumn = (sortColumn) => {
		setSortColumn(sortColumn);
	};

	const handleSearch = (query) => {
		setSearchQuery(query);
		setCurrentPage(1);
		setCurrentStatus({
			id: 1,
			name: 'All',
			value: null,
		});
	};

	const handleDelte = (todo) => {
		setTodos(todos.filter((t) => t.id !== todo.id));
	};

	const handleComplete = (todo) => {
		setTodos(
			todos.map((item) => {
				if (item.id === todo.id) {
					return {
						...item,
						completed: !item.completed,
					};
				}
				return item;
			})
		);
	};

	let filtered = todos;
	if (searchQuery) {
		filtered = todos.filter((t) =>
			t.title.toLowerCase().startsWith(searchQuery.toLowerCase())
		);
	} else if (currentStatus.value !== null) {
		filtered = todos.filter((t) => t.completed === currentStatus.value);
	}

	const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
	const todosList = paginate(sorted, currentPage, pageSize);

	const totalCount = filtered.length;

	return (
		<main className="container">
			<h1 className="text-center my-4">Todo List</h1>
			<div className="row">
				<div className="col-2">
					<StatusGroup
						items={status}
						onItemSelect={handleStatusSelect}
						selectedItem={currentStatus}
					/>

					<SearchBox value={searchQuery} onChange={handleSearch} />
				</div>
				<div className="col">
					<Form
						todoAdd={todoAdd}
						onHandleChange={handleChange}
						onHandleSubmit={handleSubmit}
					/>
					<div className="d-flex justify-content-between">
						<p>Showing {totalCount} exercise to do</p>
					</div>
					<Table
						todos={todosList}
						sortColumn={sortColumn}
						onSort={handleSortColumn}
						onDelete={handleDelte}
						onComplete={handleComplete}
					/>
					<div className="d-flex justify-content-between">
						<Pagination
							itemsCount={totalCount}
							pageSize={pageSize}
							currentPage={currentPage}
							onPageChange={handlePageChange}
						/>
						<ClearButton onClearAllCompleted={handleClearAllCompleted} />
					</div>
				</div>
			</div>
		</main>
	);
}
