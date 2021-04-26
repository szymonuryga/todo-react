import React from 'react';
import Input from './common/input';

function Form({ todoAdd, onHandleSubmit, onHandleChange }) {
	return (
		<form onSubmit={onHandleSubmit}>
			<Input
				name={todoAdd}
				value={todoAdd}
				onChange={onHandleChange}
				placeholder="Write a exercise to do"
			/>
			<button className="btn btn-primary mb-3">Add a new exercise</button>
		</form>
	);
}

export default Form;
