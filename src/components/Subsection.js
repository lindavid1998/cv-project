import React from 'react';
import Button from './Button';
import '../styles/Subsection.css';

export default function Subsection(props) {
	const { info, onClickDelete, onClickEdit } = props;

	if (info.skill) {
		return (
			<li className='skill' key={info.id} id={info.id}>
				<div>
					<p className='skill-name'>{info.skill}</p>
					<Button text='Edit' className='edit' onClick={onClickEdit} />
					<Button text='Delete' className='delete' onClick={onClickDelete} />
				</div>
			</li>
		);
	}

	return (
		<div className='Subsection' id={info.id}>
			<h2 className='header'>{info.name || info.company}</h2>
			<p className='subheader'>{info.degree || info.title}</p>
			<p className='duration'>
				{info.start} - {info.end}
			</p>
			{info.description && <p className='description'>{info.description}</p>}
			<div className='buttons'>
				<Button text='Edit' className='edit' onClick={onClickEdit} />
				<Button text='Delete' className='delete' onClick={onClickDelete} />
			</div>
		</div>
	);
}