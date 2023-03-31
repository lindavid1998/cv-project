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
			addWork: false,
			editJob: false,
			editId: null,
		};

		this.handleClickToggleForm = this.handleClickToggleForm.bind(this);
		this.handleClickRemove = this.handleClickRemove.bind(this);
		this.handleSubmitAdd = this.handleSubmitAdd.bind(this);
		this.handleSubmitEdit = this.handleSubmitEdit.bind(this);
	}

	handleClickToggleForm(e) {
		if (e.currentTarget.classList.contains('edit')) {
			this.setState({
				addWork: true,
				editJob: true,
				editId: e.currentTarget.parentNode.parentNode.id,
			});
		} else {
			this.setState({
				addWork: !this.state.addWork,
				editJob: false,
			});
		}
	}

	handleClickRemove(e) {
		const id = e.currentTarget.parentNode.parentNode.id;

		this.setState({
			jobs: this.state.jobs.filter((job) => job.id != id),
		});
	}

	handleSubmitAdd(e) {
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
			addWork: false,
			editJob: false,
		});
	}

	handleSubmitEdit(e) {
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
		jobs[i] = Object.assign({}, jobs[i], newJob);

		this.setState({
			jobs: jobs,
			addWork: false,
			editJob: false,
		});
	}

	render() {
		const { jobs, addWork, editJob, editId } = this.state;

		return (
			<div className="Work">
				<div className="header">
					<h1>Work</h1>
					<Button
						text="Add"
						onClick={this.handleClickToggleForm}
						className="add"
					/>
				</div>
				{jobs.map((job, i) => {
					return (
						<Job
							company={job.company}
							title={job.title}
							start={job.start}
							end={job.end}
							description={job.description}
							id={job.id}
							key={i}
							onClickRemove={this.handleClickRemove}
							onClickEdit={this.handleClickToggleForm}
						/>
					);
				})}

				{addWork && (
					<Form
						fields={
							editJob
								? jobs.find((job) => job.id == editId)
								: {
										company: '',
										title: '',
										start: '',
										end: '',
										description: '',
								  }
						}
						onSubmit={editJob ? this.handleSubmitEdit : this.handleSubmitAdd}
						onClickCancel={this.handleClickToggleForm}
					/>
				)}
			</div>
		);
	}
}

export default Work;
