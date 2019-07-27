import React, { Component } from "react";
import "./Todo.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.task
    };
  }
  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <CSSTransition key='editing' timeout={500} classNames='form'>
          <form className='Todo-edit-form' onSubmit={this.handleUpdate}>
            <input
              type='text'
              value={this.state.task}
              name='task'
              onChange={this.handleChange}
            />
            <button>Save</button>
          </form>
        </CSSTransition>
      );
    } else {
      result = (
        <CSSTransition key='normal' timeout={500} classNames='task-text'>
          <li className='Todo-task' onClick={this.handleToggle}>
            {this.props.task}
          </li>
        </CSSTransition>
      );
    }
    return (
      <TransitionGroup
        className={this.props.completed ? "Todo completed" : "Todo"}
      >
        {result}
        <div className='Todo-buttons'>
          <button onClick={this.toggleForm}>
            <i class='fas fa-pen' />
          </button>
          <button onClick={this.handleRemove}>
            <i class='fas fa-trash' />
          </button>
        </div>
      </TransitionGroup>
    );
  }
}
export default Todo;