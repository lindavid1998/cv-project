import React, { Component } from 'react';
import '../styles/Button.css';

class Button extends Component {
	render() {
		const { text, onClick, className, id } = this.props;

		let icon;
		if (text === 'Add') {
			icon = <i className="fa-solid fa-circle-plus"></i>;
		} else if (text === 'Edit') {
			icon = <i className="fa-solid fa-pen"></i>;
		} else if (text === 'Delete') {
			icon = <i className="fa-regular fa-trash-can"></i>;
		} else if (text === 'Cancel') {
			icon = text;
		}

		return (
			<button onClick={onClick} id={id} className={className}>
				{icon}
			</button>
		);
	}
}

export default Button;
