import React, { Component } from 'react';
import Button from './Button';
import './Form.css';

class Form extends Component {

	render() {
		const { fields, submitHandler, toggleForm } = this.props;

		return (
			<form onSubmit={submitHandler}>
				{fields.map((field, i) => {
					return (
						<div className="form-row" key={i}>
							<label htmlFor={field}>
								{field.charAt(0).toUpperCase() + field.slice(1)}
							</label>
							<input type="text" id={field} name={field}></input>
						</div>
					);
				})}
				<div className="form-row">
					<input type="submit" value="Submit"></input>
					<Button text="Cancel" onClick={toggleForm} className="cancel" />
				</div>
			</form>
		);
	}
}

export default Form;
