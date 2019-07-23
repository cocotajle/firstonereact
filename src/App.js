import React, { Component } from 'react';
import { FlexGrid } from 'wijmo/wijmo.react.grid';
import './wijmo.min.css';
import './App.css';
class App extends Component {
	state = {
		users: [
			{
				name: 'Christian',
				email: 'chis123@gmail.com'
			},
			{
				name: 'Connor',
				email: 'sarah@mail.com'
			},
			{
				name: 'Sarah',
				email: 'chemi@gmail.com'
			}
		],
		nameInput: '',
		emailInput: '',
		cellEdit: false,
		editingCell: ''
	};

	addUser() {
		if (this.state.nameInput.length === 0 || this.state.emailInput.length === 0) {
			return;
		}
		this.setState({
			users: [
				// Create a new array, but keep the previous users
				...this.state.users,
				// Add the new user to the array
				{
					id: this.state.users.length,
					// Use the input values saved in state
					name: this.state.nameInput,
					job: this.state.jobInput
				}
			],
			// Reset the inputs to blank in the process
			nameInput: '',
			emailInput: ''
		});
	}

	updateInputValue(name, evt) {
		this.setState({
			[name]: evt.target.value
		});
	}

	beginEdit(args) {
		this.setState({
			cellEdit: true,
			editingCell: `${args.col}, ${args.row}`
		});
	}

	finishEdit() {
		this.setState({
			cellEdit: false
		});
	}

	render() {
		return (
			<div className="App">
				<FlexGrid
					itemsSource={this.state.users}
					className="grid"
					allowAddNew={true}
					beginningEdit={(sender, args) => {
						this.beginEdit(args);
					}}
					cellEditEnded={() => {
						this.finishEdit();
					}}
				/>
				<br />
				<h2>Add User</h2>
				<div>
					<label htmlFor="userName">Name: </label>
					<input
						type="text"
						id="userName"
						value={this.state.nameInput}
						onChange={(evt) => this.updateInputValue('nameInput', evt)}
					/>
				</div>
				<br />
				<div>
					<label htmlFor="userEmail">Email: </label>
					<input
						type="text"
						id="userEmail"
						value={this.state.emailInput}
						onChange={(evt) => this.updateInputValue('emailInput', evt)}
					/>
				</div>
				<br />
				<input type="button" value="Add User" onClick={() => this.addUser()} />
				<br />
				<h2 style={{ display: this.state.cellEdit ? 'block' : 'none' }}>
					Currently editing cell at {this.state.editingCell}
				</h2>
			</div>
		);
	}
}


export default App;
