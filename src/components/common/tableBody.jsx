import React from 'react';
import _ from 'lodash';

function TableBody({ todos, onDelete, onComplete }) {
	return (
		<tbody>
			{todos.map((todo) => (
				<tr key={todo.id}>
					<th scope="row">{todo.id}</th>
					<td className={todo.completed === true ? 'completed' : ''}>
						{todo.title}
					</td>
					<td>
						{todo.completed === true ? (
							<i className="fa fa-check-circle" style={{ color: 'green' }}></i>
						) : (
							''
						)}
					</td>
					<td>
						<button
							onClick={() => onComplete(todo)}
							className="btn btn-success btn-sm "
						>
							<i className="fa fa-check"></i>
						</button>
					</td>
					<td>
						<button
							onClick={() => onDelete(todo)}
							className="btn btn-danger btn-sm"
						>
							<i className="fa fa-trash-o" aria-hidden="true"></i>
						</button>
					</td>
				</tr>
			))}
		</tbody>
	);
}

export default TableBody;
