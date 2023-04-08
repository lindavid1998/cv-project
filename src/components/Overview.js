import React, { useState } from 'react';
import Button from './Button';
import Form from './Form';
import Avatar from './Avatar';
import '../styles/Overview.css';

export default function Overview() {
	const [info, setInfo] = useState({
		name: 'Your name',
		title: 'Your title',
		phone: 'xxx-xxx-xxxx',
		email: 'xxx@email.com',
	});

	const [isFormVisible, setIsFormVisible] = useState(false);

	const toggleForm = () => {
		setIsFormVisible(!isFormVisible);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const formData = new FormData(e.target);

		setInfo({
			name: formData.get('name'),
			title: formData.get('title'),
			phone: formData.get('phone'),
			email: formData.get('email'),
		});

		setIsFormVisible(false);
	};

	const { name, title, phone, email } = info

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

			<Button text='Edit' onClick={toggleForm} className='edit' />

			{isFormVisible && (
				<Form
					fields={info}
					onSubmit={handleSubmit}
					onClickCancel={toggleForm}
				/>
			)}
		</div>
	);
}
