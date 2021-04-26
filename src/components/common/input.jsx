import React from 'react';

export default function Input({ name, label, error, ...rest }) {
	return (
		<div className="form-group">
			<input {...rest} id={name} className="form-control " type="text" />
			{error && <div className="alert alert-danger">{error}</div>}
		</div>
	);
}
