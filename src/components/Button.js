import React, { Component } from 'react';
import '../styles/Button.css';

class Button extends Component {
	render() {
		const { text, onClick, className, id } = this.props;

		let icon;
		switch (text) {
			case 'Add':
				icon = <i className="fa-solid fa-circle-plus"></i>;
				break;
			case 'Edit':
				icon = <i className="fa-solid fa-pen"></i>;
				break;
			case 'Delete':
				icon = <i className="fa-regular fa-trash-can"></i>;
				break;
			case 'Cancel':
				icon = text;
				break;
			default:
				icon = null;
		}

		return (
			<button onClick={onClick} id={id} className={className}>
				{icon}
			</button>
		);
	}
}

export default Button;
