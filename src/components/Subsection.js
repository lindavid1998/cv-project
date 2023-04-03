import React, { Component } from 'react';
import Button from './Button';
import '../styles/Subsection.css';

class Subsection extends Component {
	render() {
		const { info, onClickDelete, onClickEdit } = this.props;

		return (
			<div className="Subsection" id={info.id}>
				<h2 className="header">{info.name || info.company}</h2>
				<p className="subheader">{info.degree || info.title}</p>
				<p className="duration">
					{info.start} - {info.end}
				</p>
				<p className="description">{info.description}</p>
				<div className="buttons">
					<Button text="Edit" className="edit" onClick={onClickEdit} />
					<Button text="Delete" className="delete" onClick={onClickDelete} />
				</div>
			</div>
		);
	}
}

export default Subsection;
