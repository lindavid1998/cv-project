import React, { Component } from 'react';
import Button from './Button';
import '../styles/Form.css';

class Form extends Component {
	render() {
		const { fields, onSubmit, onClickCancel } = this.props;

		return (
			<form onSubmit={onSubmit}>
				{Object.keys(fields).map((key, i) => {
					if (key === 'id') return null
					return (
						<div className="form-row" key={i}>
							<label htmlFor={key}>
								{key.charAt(0).toUpperCase() + key.slice(1)}
							</label>
							<input
								type="text"
								id={key}
								name={key}
								defaultValue={fields[key]}
							></input>
						</div>
					);
				})}
				<div className="form-row">
					<input type="submit" value="Submit"></input>
					<Button text="Cancel" onClick={onClickCancel} className="cancel" />
				</div>
			</form>
		);
	}
}

export default Form;
