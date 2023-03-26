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
			count: 0,
		};
		this.toggleForm = this.toggleForm.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
		this.handleRemove = this.handleRemove.bind(this);
	}

	toggleForm() {
		this.setState({
			schools: this.state.schools,
			showForm: !this.state.showForm,
		});
	}

	handleAdd(e) {
		e.preventDefault();
		const formData = new FormData(e.target);

		const newSchool = {
			name: formData.get('name'),
			degree: formData.get('degree'),
			start: formData.get('start'),
			end: formData.get('end'),
			description: formData.get('description'),
			id: this.state.count,
		};

		this.setState({
			schools: this.state.schools.concat(newSchool),
			showForm: false,
			count: this.state.count + 1,
		});
	}

	handleRemove(e) {
		const id = e.target.parentNode.parentNode.id;

		this.setState({
			schools: this.state.schools.filter((school) => school.id != id),
			showForm: this.state.showForm,
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
							handleRemove={this.handleRemove}
							id={school.id}
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
						handleSubmit={this.handleAdd}
						toggleForm={this.toggleForm}
					/>
				)}
			</div>
		);
	}
}

export default Education;
