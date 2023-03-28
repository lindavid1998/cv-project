import React, { Component } from 'react';
import Button from './Button';
import Form from './Form';

class Skills extends Component {
	constructor(props) {
		super(props);
		this.state = {
			skills: [],
			showForm: false,
		};
		this.toggleForm = this.toggleForm.bind(this);
	}

	toggleForm() {
		this.setState({
			showForm: !this.state.showForm,
		});
	}

    render() {
        const { showForm } = this.state
		return (
			<div className="Skills">
				<div className="header">
					<h1>Skills</h1>
					<Button text="Add" onClick={this.toggleForm} className="add" />
                </div>

				{showForm && (
					<Form
						fields={{
							skill: '',
						}}
						handleSubmit={this.handleAdd}
						toggleForm={this.toggleForm}
					/>
				)}
			</div>
		);
	}
}

export default Skills;
