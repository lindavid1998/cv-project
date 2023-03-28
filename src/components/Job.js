import React, { Component } from 'react';
import Button from './Button';

class Job extends Component {
    render() {
		const {
			company,
			title,
			start,
			end,
			description,
			handleRemove,
			toggleEdit,
			id,
		} = this.props;

		return (
			<div className="Job" id={id}>
				<h2 className="company">{company}</h2>
				<p className="title">{title}</p>
				<p className="duration">
					{start} - {end}
				</p>
				<p className="description">{description}</p>
				<div className="buttons">
					<Button text="Edit" className="edit job" onClick={toggleEdit} />
					<Button text="Delete" className="delete job" onClick={handleRemove} />
				</div>
			</div>
		);
	}
}

export default Job;
