import React, { Component } from 'react';
import '../styles/Overview.css';
import Button from './Button';
import Form from './Form';
import avatar from './avatar.svg';

class Overview extends Component {
	constructor(props) {
		super(props);
		this.state = {
			info: {
				name: 'Your name',
				title: 'Your title',
				phone: 'xxx-xxx-xxxx',
				email: 'xxx@email.com',
			},
			showForm: false,
		};
		this.toggleForm = this.toggleForm.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	toggleForm() {
		this.setState({
			info: this.state.info,
			showForm: !this.state.showForm,
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const formData = new FormData(e.target);

		this.setState({
			info: {
				name: formData.get('name'),
				title: formData.get('title'),
				phone: formData.get('phone'),
				email: formData.get('email'),
			},
			showForm: false,
		});
	}

	render() {
		const { info, showForm } = this.state;
		const { name, title, phone, email } = info;

		return (
			<div className="Overview">
				<div className="avatar">
					<img src={avatar} alt="Avatar" />
				</div>
				<h1 className="name">{name}</h1>
				<h2 className="title">{title}</h2>
				<div className="contact-info">
					<div>{phone}</div>
					<div>|</div>
					<div>{email}</div>
				</div>

				<Button
					text="Edit"
					onClick={this.toggleForm}
					className="edit"
					id="overview"
				/>

				{showForm && (
					<Form
						fields={info}
						handleSubmit={this.handleSubmit}
						toggleForm={this.toggleForm}
					/>
				)}
			</div>
		);
	}
}

export default Overview;
