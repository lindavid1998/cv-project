import React, { Component } from 'react';
import avatar from './avatar.svg';
import ImageForm from './ImageForm';
import '../styles/Avatar.css';

class Avatar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			src: avatar,
			isFormVisible: false,
		};

		this.showForm = this.showForm.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	showForm(e, value) {
		e.stopPropagation();
		this.setState({
			isFormVisible: value,
		})
	}

	handleSubmit(e) {
		e.preventDefault();

		// retrieve submitted file
		const file = e.target.querySelector('#avatar-img').files[0];

		if (!file) return null

		// create instance of FileReader object
		const reader = new FileReader();

		// read submitted file as URL
		reader.readAsDataURL(file);

		// update state after file is read as URL
		reader.onload = (event) => {
			const imageData = event.target.result;

			this.setState({
				src: imageData,
				isFormVisible: false,
			});
		};
	}

	render() {
		const { src, isFormVisible } = this.state;

		return (
			<div className="avatar" onClick={(e) => this.showForm(e, true)}>
				<img src={src} alt="Avatar" />

				{isFormVisible && (
					<ImageForm
						onSubmit={this.handleSubmit}
						onClickCancel={(e) => this.showForm(e, false)}
					/>
				)}
			</div>
		);
	}
}

export default Avatar;
