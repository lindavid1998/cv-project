import React from 'react';
import '../styles/Button.css';

function Button({ text, onClick, className, id }) {
	let icon;
	switch (text) {
		case 'Add':
			icon = <i className='fa-solid fa-circle-plus'></i>;
			break;
		case 'Edit':
			icon = <i className='fa-solid fa-pen'></i>;
			break;
		case 'Delete':
			icon = <i className='fa-regular fa-trash-can'></i>;
			break;
		case 'Cancel':
			icon = text;
			break;
		default:
			icon = null;
	}

	return (
		<button onClick={onClick} id={id} className={className} type='button'>
			{icon}
		</button>
	);
}

export default Button;
