const ClearButton = ({ onClearAllCompleted }) => {
	return (
		<div className="d-grid gap-2 d-md-flex justify-content-md-end">
			<button onClick={onClearAllCompleted} className="btn btn-primary">
				Clear all completed
			</button>
		</div>
	);
};

export default ClearButton;
