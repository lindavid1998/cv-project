import React, { useState } from 'react';
import Form from './Form';
import Button from './Button';
import Subsection from './Subsection';
import '../styles/Section.css';

export default function Section(props) {
	const { title, formFields } = props;

	const [data, setData] = useState([]);
	const [isFormVisible, setIsFormVisible] = useState(false);
	const [count, setCount] = useState(0);
	const [editID, setEditID] = useState(null);

	const showForm = (value) => {
		setIsFormVisible(value);

		if (!value) {
			setEditID(null);
		}
	};

	const handleDelete = (e) => {
		const id = e.currentTarget.parentNode.parentNode.id;
		setData(data.filter((info) => info.id != id));
	};

	const handleEdit = (e) => {
		const id = e.currentTarget.parentNode.parentNode.id;
		setIsFormVisible(true);
		setEditID(id);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const formData = new FormData(e.target);

		const keys = Object.keys(formFields);

		const newData = keys.reduce((acc, key) => {
			acc[key] = formData.get(key);
			return acc;
		}, {});

		newData['id'] = count;

		if (editID) {
			let i = data.findIndex((info) => info.id == editID);
			data[i] = Object.assign({}, data[i], newData);
		}

		setData(editID ? data : data.concat(newData));
		setIsFormVisible(false);
		setEditID(null);
		setCount(count + 1);
	};

	const subsections = data.map((info, i) => {
		return (
			<Subsection
				info={info}
				onClickDelete={handleDelete}
				onClickEdit={handleEdit}
				key={i}
			/>
		);
	});

	const formProps = {
		fields: data.find((info) => info.id == editID) || formFields,
		onClickCancel: () => showForm(false),
		onSubmit: handleSubmit,
	};

	return (
		<div className={`Section ${title}`}>
			<div className='header'>
				<h1>{title}</h1>
				<Button
					text='Add'
					className='add'
					onClick={() => showForm(true)}
				/>
			</div>

			{title === 'Skills' ? (
				<ul className='skills-list'>{subsections}</ul>
			) : (
				subsections
			)}

			{isFormVisible && <Form {...formProps} />}
		</div>
	);
}
