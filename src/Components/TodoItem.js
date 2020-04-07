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
      <li className={todo.completed ? "completed" : ""}>
        <div className="view">
          {todo.completed}
          <input
            type="checkbox"
            className="toggle"
            value={!todo.completed}
            onClick={this.toggleCheckBox}
            // onClick={this.}

          />
          <label com={todo.completed}>{todo.title }</label>
          <button className="destroy" onClick={this.removeTask} />
        </div>
      </li>
    );
  }
}
export default TodoItems;
