import React, { Component } from 'react';
import Form from './Form';
import Button from './Button';
import '../styles/Section.css';
class Section extends Component {
	constructor(props) {
		super(props);
		this.state = {
			add: false,
            data: [],
            count: 0,
		};
		this.handleClick = this.handleClick.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleClick = (value) => {
		this.setState({
			add: value,
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
        
		this.setState({
			data: this.state.data.concat(newData),
			add: false,
			count: this.state.count + 1,
		});
	};

	render() {
		const { add } = this.state;
		const { title, formFields } = this.props;

		return (
			<div className={`Section ${title}`}>
				<div className="header">
					<h1>{title}</h1>
					<Button
						text="Add"
						onClick={() => this.handleClick(true)}
						className="add"
					/>
				</div>

				{add && (
					<Form
						fields={formFields}
						onClickCancel={() => this.handleClick(false)}
						onSubmit={this.handleSubmit}
					/>
				)}
			</div>
		);
	}
}

export default Section;
