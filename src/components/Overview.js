import React, { Component } from 'react';
import Button from './Button';
import Form from './Form';
import Avatar from './Avatar';
import '../styles/Overview.css';

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
			isFormVisible: false,
		};

		this.toggleForm = this.toggleForm.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	toggleForm() {
		this.setState({
			isFormVisible: !this.state.isFormVisible,
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
			isFormVisible: false,
		});
	}

	render() {
		const { info, isFormVisible } = this.state;
		const { name, title, phone, email } = info;

		return (
			<div className='Overview'>
				<Avatar />
				<h1 className='name'>{name}</h1>
				<h2 className='title'>{title}</h2>
				<div className='contact-info'>
					<div>{phone}</div>
					<div>|</div>
					<div>{email}</div>
				</div>

				<Button text='Edit' onClick={this.toggleForm} className='edit' />

				{isFormVisible && (
					<Form
						fields={info}
						onSubmit={this.handleSubmit}
						onClickCancel={this.toggleForm}
					/>
				)}
			</div>
		);
	}
}

export default Overview;
