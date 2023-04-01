import React, { Component } from 'react';
import avatar from './avatar.svg';
import ImageForm from './ImageForm';
import '../styles/Avatar.css';

class Avatar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			src: avatar,
			editAvatar: false,
		};
		this.handleClickHideForm = this.handleClickHideForm.bind(this);
		this.handleClickShowForm = this.handleClickShowForm.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleClickHideForm() {
		this.setState({
			editAvatar: false,
		});
	}

	handleClickShowForm() {
		this.setState({
			editAvatar: true,
		});
	}

	handleSubmit(e) {
		e.preventDefault();

		// retrieve submitted file
		const file = e.target.querySelector('#avatar-img').files[0];

		// create instance of FileReader object
		const reader = new FileReader();

		// read submitted file as URL
		reader.readAsDataURL(file);

		// update state after file is read as URL
		reader.onload = (event) => {
			const imageData = event.target.result;
			
			this.setState({
				src: imageData,
				editAvatar: false,
			});
		};
	}

	render() {
		const { src, editAvatar } = this.state;

		return (
			<div className="avatar" onClick={this.handleClickShowForm}>
				<img src={src} alt="Avatar" />
				{editAvatar && (
					<ImageForm
						onSubmit={this.handleSubmit}
						onClickCancel={this.handleClickHideForm}
					/>
				)}
			</div>
		);
	}
}

export default Avatar;
