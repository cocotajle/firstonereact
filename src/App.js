import React, { Component } from 'react';
import Navigation from 'components/Navigation';
import NewToDoForm from 'components/NewToDoForm';
import Sidebar from 'components/Sidebar';
import TodoList from 'components/TodoList';
import Todos from 'components/Todos';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="wrapper">
				<Navigation />
				<Sidebar />
				<NewToDoForm />
				<TodoList />
				<Todos />
			</div>
		);
	}
}

export default App;
