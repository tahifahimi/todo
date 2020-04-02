import React, { Component } from "react";

class TodoEntry extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "enter the new task" };
    // this.createNewTodo = this.createNewTodo.bind(this);
  }
  // createNewTodo(event) {
  //   this.setState({ value: event.target.value });
  // }

  handleEnter(event) {
    //check the enterd keyboard
    if (event.key === "Enter") {
      console.log(event.key);
      // create new todo here
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
          placeholder={this.state.value}
          onKeyDown={this.handleEnter}
        />
      </header>
    );
  }
}
export default TodoEntry;
