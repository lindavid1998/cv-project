import React, { Component } from 'react';
import Form from './Form';
import Button from './Button';
import Subsection from './Subsection';
import '../styles/Section.css';
class Section extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isFormVisible: false,
			isEditMode: false,
			data: [],
			count: 0,
			editID: null,
		};
		this.showForm = this.showForm.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	showForm(value) {
		this.setState({
			isFormVisible: value,
		});

		if (!value) {
			this.setState({
				isEditMode: false,
			})
		}
	}

	handleDelete(e) {
		const id = e.currentTarget.parentNode.parentNode.id;

		this.setState({
			data: this.state.data.filter((info) => info.id != id),
		});
	}

	handleEdit(e) {
		const id = e.currentTarget.parentNode.parentNode.id;

		this.setState({
			isFormVisible: true,
			isEditMode: true,
			editID: id,
		});
	}

	handleSubmit(e) {
		e.preventDefault();

		const formData = new FormData(e.target);

		const keys = Object.keys(this.props.formFields);

		const newData = keys.reduce((acc, key) => {
			acc[key] = formData.get(key);
			return acc;
		}, {});

		newData['id'] = this.state.count;

		let data;
		if (this.state.isEditMode) {
			data = this.state.data;
			let i = data.findIndex((info) => info.id == this.state.editID);
			data[i] = Object.assign({}, data[i], newData);
		}

		this.setState({
			data: this.state.isEditMode ? data : this.state.data.concat(newData),
			isFormVisible: false,
			isEditMode: false,
			count: this.state.count + 1,
		});
	}

	render() {
		const { isFormVisible, data, isEditMode, editID } = this.state;
		const { title, formFields } = this.props;

		return (
			<div className={`Section ${title}`}>
				<div className="header">
					<h1>{title}</h1>
					<Button
						text="Add"
						className="add"
						onClick={() => this.showForm(true)}
					/>
				</div>

				{data.map((info, i) => {
					return (
						<Subsection
							info={info}
							onClickDelete={this.handleDelete}
							onClickEdit={this.handleEdit}
							key={i}
						/>
					);
				})}

				{isFormVisible && (
					<Form
						fields={
							isEditMode ? data.find((info) => info.id == editID) : formFields
						}
						onClickCancel={() => this.showForm(false)}
						onSubmit={this.handleSubmit}
					/>
				)}
			</div>
		);
	}
}

export default Section;
