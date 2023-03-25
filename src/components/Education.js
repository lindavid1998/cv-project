import React, { Component } from 'react';
import School from './School';
import Button from './Button';
import Form from './Form';
import '../styles/Education.css';

class Education extends Component {
	constructor(props) {
		super(props);
		this.state = {
			schools: [],
			showForm: false,
		};
		this.toggleForm = this.toggleForm.bind(this);
		this.submitHandler = this.submitHandler.bind(this);
	}

	toggleForm() {
		this.setState({
			schools: this.state.schools,
			showForm: !this.state.showForm,
		});
	}

	submitHandler(e) {
		e.preventDefault();
		const formData = new FormData(e.target);

		const newSchool = {
			name: formData.get('name'),
			degree: formData.get('degree'),
			start: formData.get('start'),
			end: formData.get('end'),
			description: formData.get('description'),
		};

		this.setState({
			schools: this.state.schools.concat(newSchool),
			showForm: false,
		});
	}

	render() {
		const { schools, showForm } = this.state;

		return (
			<div className="education">
				<div className="header">
					<h1>Education</h1>
					<Button text="Add" onClick={this.toggleForm} className="add" />
				</div>

				{schools.map((school, i) => {
					return (
						<School
							name={school.name}
							degree={school.degree}
							start={school.start}
							end={school.end}
							description={school.description}
							key={i}
						/>
					);
				})}

				{showForm && (
					<Form
						fields={{
							name: '',
							degree: '',
							start: '',
							end: '',
							description: '',
						}}
						submitHandler={this.submitHandler}
						toggleForm={this.toggleForm}
					/>
				)}
			</div>
		);
	}
}

export default Education;
