import React, { Component } from 'react';
import Button from './Button';
import Form from './Form';
import '../styles/Skills.css';

class Skills extends Component {
	constructor(props) {
		super(props);
		this.state = {
			skills: [],
			editSkills: false,
			count: 0,
		};
		this.handleClickToggleForm = this.handleClickToggleForm.bind(this);
		this.handleSubmitAdd = this.handleSubmitAdd.bind(this);
		this.handleClickRemove = this.handleClickRemove.bind(this);
	}

	handleClickToggleForm() {
		this.setState({
			editSkills: !this.state.editSkills,
		});
	}

	handleSubmitAdd(e) {
		e.preventDefault();

		const formData = new FormData(e.target);
		const newSkill = {
			name: formData.get('skill'),
			id: this.state.count,
		};

		this.setState({
			skills: this.state.skills.concat(newSkill),
			editSkills: false,
			count: this.state.count + 1,
		});
	}

	handleClickRemove(e) {
		const id = e.currentTarget.parentNode.parentNode.id;

		this.setState({
			skills: this.state.skills.filter((skill) => skill.id != id),
		});
	}

	render() {
		const { editSkills, skills } = this.state;
		
		return (
			<div className="Skills">
				<div className="header">
					<h1>Skills</h1>
					<Button
						text="Add"
						onClick={this.handleClickToggleForm}
						className="add"
					/>
				</div>

				<ul className="skills-list">
					{skills.map((skill) => {
						return (
							<li className="skill" key={skill.id} id={skill.id}>
								<div>
									<p>{skill.name}</p>
									<Button
										onClick={this.handleClickRemove}
										className="delete"
										text="Delete"
									/>
								</div>
							</li>
						);
					})}
				</ul>

				{editSkills && (
					<Form
						fields={{
							skill: '',
						}}
						onSubmit={this.handleSubmitAdd}
						onClickCancel={this.handleClickToggleForm}
					/>
				)}
			</div>
		);
	}
}

export default Skills;
