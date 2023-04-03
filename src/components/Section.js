import React, { Component } from 'react';
import Form from './Form';
import Button from './Button';
import Subsection from './Subsection';
import '../styles/Section.css';
class Section extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showForm: false,
			data: [],
			count: 0,
			edit: false,
			editID: null,
		};
		this.handleClickShowForm = this.handleClickShowForm.bind(this);
		this.handleClickDelete = this.handleClickDelete.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleClickShowForm = (value) => {
		this.setState({
			showForm: value,
		});
	};

	handleClickDelete = (e) => {
		const id = e.currentTarget.parentNode.parentNode.id;

		this.setState({
			data: this.state.data.filter((info) => info.id != id),
		});
	};

	handleClickEdit = (e) => {
		const id = e.currentTarget.parentNode.parentNode.id;

		this.setState({
			showForm: true,
			edit: true,
			editID: id,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();

        const formData = new FormData(e.target);
        
		const keys = Object.keys(this.props.formFields);

		const newData = keys.reduce((acc, key) => {
			acc[key] = formData.get(key);
			return acc;
        }, {});
        
		newData['id'] = this.state.count;

		let data;
		if (this.state.edit) {
			data = this.state.data;
			let i = data.findIndex((info) => info.id == this.state.editID);
			data[i] = Object.assign({}, data[i], newData);
		}

		this.setState({
			data: this.state.edit ? data : this.state.data.concat(newData),
			showForm: false,
			edit: false,
			count: this.state.count + 1,
		});
	};

	render() {
		const { showForm, data, edit, editID } = this.state;
		const { title, formFields } = this.props;

		return (
			<div className={`Section ${title}`}>
				<div className="header">
					<h1>{title}</h1>
					<Button
						text="Add"
						onClick={() => this.handleClickShowForm(true)}
						className="add"
					/>
				</div>
				{data.map((info, i) => {
					return (
						<Subsection
							info={info}
							onClickDelete={this.handleClickDelete}
							onClickEdit={this.handleClickEdit}
							key={i}
						/>
					);
				})}
				{showForm && (
					<Form
						fields={edit ? data.find((info) => info.id == editID) : formFields}
						onClickCancel={() => this.handleClickShowForm(false)}
						onSubmit={this.handleSubmit}
					/>
				)}
			</div>
		);
	}
}

export default Section;
