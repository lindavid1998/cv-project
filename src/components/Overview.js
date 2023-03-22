import React, { Component } from 'react';

class Overview extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'Your Name',
			title: 'Your Title',
			phone: 'XXX-XXX-XXXX',
			email: 'youremail@email.com',
			showForm: false,
		};
		this.editHandler = this.editHandler.bind(this);
		this.submitHandler = this.submitHandler.bind(this);
	}

	editHandler() {
		this.setState({
			name: this.state.name,
			title: this.state.title,
			phone: this.state.phone,
			email: this.state.email,
			showForm: !this.state.showForm,
		});
	}

	submitHandler(e) {
        e.preventDefault();
        const formData = new FormData(e.target)

		this.setState({
			name: formData.get('name'),
			title: formData.get('title'),
			phone: formData.get('phone'),
			email: formData.get('email'),
			showForm: false,
		});
	}

	render() {
		const { name, title, phone, email, showForm } = this.state;
		return (
			<div>
				<img src="./avatar.png" alt="Avatar" />
				<h1>{name}</h1>
				<h2>{title}</h2>
				<ul>
					<li>{phone}</li>
					<li>{email}</li>
				</ul>
				<button onClick={this.editHandler}>Edit</button>
				{showForm && (
					<form action="" onSubmit={this.submitHandler}>
						<label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" />
                        
						<label htmlFor="title">Title:</label>
                        <input type="text" id="title" name="title" />
                        
						<label htmlFor="phone">Phone:</label>
                        <input type="text" id="phone" name="phone" />
                        
						<label htmlFor="email">Email:</label>
                        <input type="text" id="email" name="email" />
                        
						<input type="submit"></input>
					</form>
				)}
			</div>
		);
	}
}

export default Overview;
