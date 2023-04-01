import React, { Component } from 'react';
import Form from './Form';
import Button from './Button';
import '../styles/Section.css';
class Section extends Component {
	constructor(props) {
		super(props);
		this.state = {
			add: false,
		};

		this.handleClickAdd = this.handleClickAdd.bind(this);
		this.handleClickCancel = this.handleClickCancel.bind(this);
	}

	handleClickAdd() {
		this.setState({
			add: true,
		});
	}

	handleClickCancel() {
		this.setState({
			add: false,
		});
	}

	render() {
		const { add } = this.state;
		const { title, formFields } = this.props;

		return (
			<div className={`Section ${title}`}>
				<div className="header">
					<h1>{title}</h1>
					<Button text="Add" onClick={this.handleClickAdd} className="add" />
				</div>

				{add && (
					<Form fields={formFields} onClickCancel={this.handleClickCancel} />
				)}
			</div>
		);
	}
}

export default Section;
