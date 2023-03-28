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
			count: 0,
			showForm: false,
			editMode: false,
			editId: null,
		};
		this.toggleForm = this.toggleForm.bind(this);
		this.toggleEdit = this.toggleEdit.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
		this.handleRemove = this.handleRemove.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
	}

	toggleForm() {
		this.setState({
			showForm: !this.state.showForm,
			editMode: false,
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
			count: this.state.count + 1,
			showForm: false,
			editMode: false,
		});
	}

	handleRemove(e) {
		const id = e.target.parentNode.parentNode.id;

		this.setState({
			schools: this.state.schools.filter((school) => school.id != id),
		});
	}

	toggleEdit(e) {
		this.setState({
			editMode: true,
			editId: e.target.parentNode.parentNode.id,
			showForm: true,
		});
	}

	handleEdit(e) {
		e.preventDefault();

		const formData = new FormData(e.target);
		const newSchool = {
			name: formData.get('name'),
			degree: formData.get('degree'),
			start: formData.get('start'),
			end: formData.get('end'),
			description: formData.get('description'),
			id: this.state.editId,
		};

		let schools = this.state.schools
		let i = schools.findIndex(school => school.id == this.state.editId)
		schools[i] = newSchool

		this.setState({
			schools: schools,
			showForm: false,
			editMode: false,
		});
	}

	render() {
		const { schools, showForm, editMode } = this.state;

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
							toggleEdit={this.toggleEdit}
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
						handleSubmit={editMode ? this.handleEdit : this.handleAdd}
						toggleForm={this.toggleForm}
					/>
				)}
			</div>
		);
	}
}

export default Education;
