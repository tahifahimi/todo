import React, { Component } from "react";
import { observer } from "mobx-react";
import todoStore from "../Stores/TodoStore";

@observer
class TodoItems extends Component {
  
  toggleCheckBox = () => {
    const { todo } = this.props;
    todoStore.toggle(todo.id);
  };

  removeTask = () => {
    const { todo } = this.props;
    todoStore.remove(todo.id);
  };
  
  render() {
    const { todo } = this.props;
    return (
      <li className={todo.completed ? "completed" : ""}>
        <div className="view">
          <input
            type="checkbox"
            className="toggle"
            value={!todo.completed}
            onClick={this.toggleCheckBox}
            // onClick={this.}
          />
          
          <label>{todo.title }</label>
          <button className="destroy" onClick={this.removeTask} />
        </div>
      </li>
    );
  }
}
export default TodoItems;
