import React, { Component } from 'react';
import Job from './Job';
import Button from './Button';
import Form from './Form';

class Work extends Component {
	constructor(props) {
		super(props);
		this.state = {
			jobs: [],
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
		const newJob = {
			company: formData.get('company'),
			title: formData.get('title'),
			start: formData.get('start'),
			end: formData.get('end'),
			description: formData.get('description'),
			id: this.state.count,
		};

		this.setState({
			jobs: this.state.jobs.concat(newJob),
			count: this.state.count + 1,
			showForm: false,
			editMode: false,
		});
	}

	handleRemove(e) {
		const id = e.currentTarget.parentNode.parentNode.id;

		this.setState({
			jobs: this.state.jobs.filter((job) => job.id != id),
		});
	}

	toggleEdit(e) {
		this.setState({
			editMode: true,
			editId: e.currentTarget.parentNode.parentNode.id,
			showForm: true,
		});
	}

	handleEdit(e) {
		e.preventDefault();

		const formData = new FormData(e.target);
		const newJob = {
			company: formData.get('company'),
			title: formData.get('title'),
			start: formData.get('start'),
			end: formData.get('end'),
			description: formData.get('description'),
		};

		let jobs = this.state.jobs;
		let i = jobs.findIndex((school) => school.id == this.state.editId);        
        jobs[i] = Object.assign({}, jobs[i], newJob)

		this.setState({
			jobs: jobs,
			showForm: false,
			editMode: false,
		});
	}

	render() {
		const { jobs, showForm, editMode, editId } = this.state;

		return (
			<div className="Work">
				<div className="header">
					<h1>Work</h1>
					<Button text="Add" onClick={this.toggleForm} className="add" />
				</div>
				{jobs.map((job, i) => {
					return (
						<Job
							company={job.company}
							title={job.title}
							start={job.start}
							end={job.end}
							description={job.description}
							handleRemove={this.handleRemove}
							toggleEdit={this.toggleEdit}
							id={job.id}
							key={i}
						/>
					);
				})}

				{showForm && (
					<Form
						fields={
							editMode
								? {
										company: jobs[editId].company,
										title: jobs[editId].title,
										start: jobs[editId].start,
										end: jobs[editId].end,
										description: jobs[editId].description,
								  }
								: {
										company: '',
										title: '',
										start: '',
										end: '',
										description: '',
								  }
						}
						handleSubmit={editMode ? this.handleEdit : this.handleAdd}
						toggleForm={this.toggleForm}
					/>
				)}
			</div>
		);
	}
}

export default Work;
