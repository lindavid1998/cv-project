import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
	render() {
		const { text, onClick, className, id } = this.props;
		return (
			<button onClick={onClick} id={id} className={className}>
				{text}
			</button>
		);
	}
}

export default Button;
