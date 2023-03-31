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
			addSchool: false,
			editSchool: false,
			editId: null,
		};

		this.handleClickToggleForm = this.handleClickToggleForm.bind(this);
		this.handleClickRemoveSchool = this.handleClickRemoveSchool.bind(this);
		this.handleSubmitAdd = this.handleSubmitAdd.bind(this);
		this.handleSubmitEdit = this.handleSubmitEdit.bind(this);
	}

	handleClickToggleForm(e) {
		if (e.currentTarget.classList.contains('edit')) {
			this.setState({
				editId: e.currentTarget.parentNode.parentNode.id,
				editSchool: true,
				addSchool: true,
			});
		} else {
			this.setState({
				addSchool: !this.state.addSchool,
				editSchool: false,
			});
		}
	}

	handleClickRemoveSchool(e) {
		const id = e.currentTarget.parentNode.parentNode.id;

		this.setState({
			schools: this.state.schools.filter((school) => school.id != id),
		});
	}

	handleSubmitAdd(e) {
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
			addSchool: false,
			editSchool: false,
		});
	}

	handleSubmitEdit(e) {
		e.preventDefault();

		const formData = new FormData(e.target);
		const newSchool = {
			name: formData.get('name'),
			degree: formData.get('degree'),
			start: formData.get('start'),
			end: formData.get('end'),
			description: formData.get('description'),
		};

		let schools = this.state.schools;
		let i = schools.findIndex((school) => school.id == this.state.editId);
		schools[i] = Object.assign({}, schools[i], newSchool);

		this.setState({
			schools: schools,
			addSchool: false,
			editSchool: false,
		});
	}

	render() {
		const { schools, addSchool, editSchool, editId } = this.state;

		return (
			<div className="Education">
				<div className="header">
					<h1>Education</h1>
					<Button
						text="Add"
						onClick={this.handleClickToggleForm}
						className="add"
					/>
				</div>
				{schools.map((school, i) => {
					return (
						<School
							name={school.name}
							degree={school.degree}
							start={school.start}
							end={school.end}
							description={school.description}
							id={school.id}
							key={i}
							onClickRemove={this.handleClickRemoveSchool}
							onClickEdit={this.handleClickToggleForm}
						/>
					);
				})}

				{addSchool && (
					<Form
						fields={
							editSchool
								? schools.find((school) => school.id == editId)
								: {
										name: '',
										degree: '',
										start: '',
										end: '',
										description: '',
								  }
						}
						onSubmit={editSchool ? this.handleSubmitEdit : this.handleSubmitAdd}
						onClickCancel={this.handleClickToggleForm}
					/>
				)}
			</div>
		);
	}
}

export default Education;
