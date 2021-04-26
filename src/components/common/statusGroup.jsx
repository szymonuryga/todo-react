import React from 'react';

export default function StatusGroup({
	items,
	textProperty,
	valueProperty,
	onItemSelect,
	selectedItem,
}) {
	return (
		<ul className="list-group">
			{items.map((item) => (
				<li
					style={{ cursor: 'pointer' }}
					onClick={() => onItemSelect(item)}
					key={item[valueProperty]}
					className={
						item[valueProperty] === selectedItem[valueProperty]
							? 'list-group-item active'
							: 'list-group-item'
					}
				>
					{item[textProperty]}
				</li>
			))}
		</ul>
	);
}

StatusGroup.defaultProps = {
	textProperty: 'name',
	valueProperty: 'id',
};
