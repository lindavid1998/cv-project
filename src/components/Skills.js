import React, { Component } from 'react';
import Button from './Button';
import Form from './Form';
import '../styles/Skills.css';

class Skills extends Component {
	constructor(props) {
		super(props);
		this.state = {
			skills: [],
			showForm: false,
			count: 0,
		};
		this.toggleForm = this.toggleForm.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
		this.handleRemove = this.handleRemove.bind(this);
	}

	toggleForm() {
		this.setState({
			showForm: !this.state.showForm,
		});
	}

	handleAdd(e) {
		e.preventDefault();

		const formData = new FormData(e.target);
		// const newSkill = formData.get('skill');

		const newSkill = {
			name: formData.get('skill'),
			id: this.state.count,
		};

		this.setState({
			skills: this.state.skills.concat(newSkill),
			showForm: false,
			count: this.state.count + 1,
		});
	}

	handleRemove(e) {
		const id = e.target.parentNode.parentNode.id;
		console.log(id);

		this.setState({
			skills: this.state.skills.filter((skill) => skill.id != id),
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
					{skills.map((skill) => {
						return (
							<li className="skill" key={skill.id} id={skill.id}>
								<div>
									<p>{skill.name}</p>
									<i
										className="fa-solid fa-minus"
										onClick={this.handleRemove}
									/>
								</div>
							</li>
						);
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
