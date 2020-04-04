import React, { Component } from "react";
import { observer } from "mobx-react";
import todoStore from "../Stores/TodoStore";

@observer
class TodoItems extends Component {
  
  toggleCheckBox = () => {
    const { todo } = this.props;
    console.log(todo.completed);
    todoStore.toggle(todo);
  };

  removeTask = () => {
    const { todo } = this.props;
    todoStore.remove(todo);
  };

  render() {
    const { todo } = this.props;
    return (
      <li className={todo.completed ? "completed" : "destroy"}>
        <div className="view">
          <input
            type="checkbox"
            className="toggle"
            value={todo.completed}
            onClick={this.toggleCheckBox}
          />
          <label>{todo.title}</label>
          <button className="destroy" onClick={this.removeTask} />
        </div>
      </li>
    );
  }
}
export default TodoItems;
