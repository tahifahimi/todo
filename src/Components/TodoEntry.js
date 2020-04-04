import React, { Component } from "react";
import TodoStore from '../Stores/TodoStore';

class TodoEntry extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleEnter(event) {
    if (event.key === "Enter") {
      console.log(this.state.value);
      // create a new task and clean the state
      TodoStore.addTodo(this.state.value);
      
      this.setState({ value: '' });
    }
    return;
  }

  render() {
    return (
      <header className="header">
        <h1>todo</h1>
        <input
          type="text"
          className="new-todo"
          value={this.state.value}
          placeholder="enter your task"
          onKeyDown={this.handleEnter}
          onChange={this.handleChange}
        />
      </header>
    );
  }
}
export default TodoEntry;
