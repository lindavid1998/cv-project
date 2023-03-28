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
		this.handleAdd = this.handleAdd.bind(this);
	}

	toggleForm() {
		this.setState({
			showForm: !this.state.showForm,
		});
	}

	handleAdd(e) {
		e.preventDefault();

		const formData = new FormData(e.target);
		const newSkill = formData.get('skill');

		this.setState({
			skills: this.state.skills.concat(newSkill),
			showForm: false,
		});
	}

	render() {
		const { showForm, skills } = this.state;
		return (
			<div className="Skills">
				<div className="header">
					<h1>Skills</h1>
					<Button text="Add" onClick={this.toggleForm} className="add" />
				</div>

				<ul className="skills-list">
					{skills.map((skill, i) => {
						return <li key={i}>{skill}</li>;
					})}
				</ul>

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
