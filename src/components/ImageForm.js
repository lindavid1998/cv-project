import React from 'react';
import Button from './Button';

function ImageForm({ onClickCancel, onSubmit }) {
	return (
		<form onSubmit={onSubmit}>
			<div className='form-row'>
				<input
					type='file'
					id='avatar-img'
					name='avatar-img'
					accept='image/png, image/jpeg'
				/>
			</div>
			<div className='form-row'>
				<input type='submit' value='Submit'></input>
				<Button text='Cancel' onClick={onClickCancel} className='cancel' />
			</div>
		</form>
	);
}

export default ImageForm;
