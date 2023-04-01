import React, { Component } from 'react';
import Button from './Button';

class ImageForm extends Component {
	render() {
		const { onSubmit, onClickCancel } = this.props;

		return (
			<form onSubmit={onSubmit}>
				<div className="form-row">
					{/* <label for="avatar-img">Select an image:</label> */}
					<input
						type="file"
						id="avatar-img"
						name="avatar-img"
						accept="image/png, image/jpeg"
					/>
				</div>
				<div className="form-row">
					<input type="submit" value="Submit"></input>
					<Button text="Cancel" onClick={onClickCancel} className="cancel" />
				</div>
			</form>
		);
	}
}

export default ImageForm;