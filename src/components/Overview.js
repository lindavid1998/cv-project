import React, { Component } from 'react';
import '../styles/Overview.css';
import Button from './Button';
import Form from './Form';
import avatar from './avatar.svg';
import ImageForm from './ImageForm';

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
			editInfo: false,
			editAvatar: false,
		};

		this.handleClickToggleEditInfo = this.handleClickToggleEditInfo.bind(this);
		this.handleClickToggleEditAvatar =
			this.handleClickToggleEditAvatar.bind(this);
		this.handleSubmitInfo = this.handleSubmitInfo.bind(this);
		this.handleSubmitAvatar = this.handleSubmitAvatar.bind(this);
	}

	handleClickToggleEditInfo() {
		this.setState({
			editInfo: !this.state.editInfo,
		});
	}

	handleClickToggleEditAvatar() {
		this.setState({
			editAvatar: !this.state.editAvatar,
		});
	}

	handleSubmitInfo(e) {
		e.preventDefault();
		const formData = new FormData(e.target);

		this.setState({
			info: {
				name: formData.get('name'),
				title: formData.get('title'),
				phone: formData.get('phone'),
				email: formData.get('email'),
			},
			editInfo: false,
		});
	}

	handleSubmitAvatar(e) {
		e.preventDefault();
		const formData = new FormData(e.target);
		console.log(formData);
		this.setState({
			editAvatar: false,
		});
	}

	render() {
		const { info, editInfo, editAvatar } = this.state;
		const { name, title, phone, email } = info;

		return (
			<div className="Overview">
				<div className="avatar" onClick={this.handleClickToggleEditAvatar}>
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
					onClick={this.handleClickToggleEditInfo}
					className="edit"
				/>

				{editInfo && (
					<Form
						fields={info}
						onSubmit={this.handleSubmitInfo}
						onClickCancel={this.handleClickToggleEditInfo}
					/>
				)}

				{editAvatar && (
					<ImageForm
						onSubmit={this.handleSubmitAvatar}
						onClickCancel={this.handleClickToggleEditAvatar}
					/>
				)}
			</div>
		);
	}
}

export default Overview;
