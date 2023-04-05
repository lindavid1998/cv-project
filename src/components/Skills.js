import React, { Component } from 'react';
import Button from './Button';
import Form from './Form';
import '../styles/Skills.css';

class Skills extends Component {
	constructor(props) {
		super(props);
		this.state = {
			skills: [],
			isEditMode: false,
			count: 0,
		};
		this.toggleForm = this.toggleForm.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}

	toggleForm() {
		this.setState({
			isEditMode: !this.state.isEditMode,
		});
	}

	handleDelete(e) {
		const id = e.currentTarget.parentNode.parentNode.id;

		this.setState({
			skills: this.state.skills.filter((skill) => skill.id != id),
		});
	}

	handleSubmit(e) {
		e.preventDefault();

		const formData = new FormData(e.target);
		const newSkill = {
			name: formData.get('skill'),
			id: this.state.count,
		};

		this.setState({
			skills: this.state.skills.concat(newSkill),
			isEditMode: false,
			count: this.state.count + 1,
		});
	}

	render() {
		const { isEditMode, skills } = this.state;

		return (
			<div className="Skills">
				<div className="header">
					<h1>Skills</h1>
					<Button text="Add" className="add" onClick={this.toggleForm} />
				</div>

				<ul className="skills-list">
					{skills.map((skill) => {
						return (
							<li className="skill" key={skill.id} id={skill.id}>
								<div>
									<p>{skill.name}</p>
									<Button
										text="Delete"
										className="delete"
										onClick={this.handleDelete}
									/>
								</div>
							</li>
						);
					})}
				</ul>

				{isEditMode && (
					<Form
						fields={{
							skill: '',
						}}
						onSubmit={this.handleSubmit}
						onClickCancel={this.toggleForm}
					/>
				)}
			</div>
		);
	}
}

export default Skills;
