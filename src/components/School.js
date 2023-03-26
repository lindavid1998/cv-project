import React, { Component } from 'react';
import Button from './Button';
import '../styles/School.css';

class School extends Component {
	render() {
		const { name, degree, start, end, description, handleRemove, id } = this.props;
		return (
			<div className="school" id={id}>
				<h2 className="school-name">{name}</h2>
				<p className="degree">{degree}</p>
				<p className="duration">
					{start} - {end}
				</p>
				<p className="description">{description}</p>
				<div className="buttons">
					<Button text="Edit" className="edit school" />
					<Button
						text="Delete"
						className="delete school"
						onClick={handleRemove}
					/>
				</div>
			</div>
		);
	}
}

export default School;
