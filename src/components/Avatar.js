import React, { useState } from 'react';
import avatar from './avatar.svg';
import ImageForm from './ImageForm';
import '../styles/Avatar.css';

function Avatar() {
	const [src, setSrc] = useState(avatar);
	const [isFormVisible, setIsFormVisible] = useState(false);

	const showForm = (e, value) => {
		e.stopPropagation();
		setIsFormVisible(value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		// retrieve submitted file
		const file = e.target.querySelector('#avatar-img').files[0];
		if (!file) return null;

		// create instance of FileReader object
		const reader = new FileReader();

		// read submitted file as URL
		reader.readAsDataURL(file);

		// update state after file is read as URL
		reader.onload = (event) => {
			const imageData = event.target.result;
			setSrc(imageData);
			setIsFormVisible(false);
		};
	}

	return (
		<div className='avatar' onClick={(e) => showForm(e, true)}>
			<img src={src} alt='Avatar' />

			{isFormVisible && (
				<ImageForm
					onSubmit={handleSubmit}
					onClickCancel={(e) => showForm(e, false)}
				/>
			)}
		</div>
	);
}

export default Avatar;
