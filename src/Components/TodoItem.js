import React, { Component } from "react";
import { observer } from "mobx-react";
import todoStore from "../Stores/TodoStore";

@observer
class TodoItems extends Component {
  constructor(props) {
    super(props);
    // this.state ={}
  }

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
          {console.log(todo.completed)}
          <input
            type="checkbox"
            id = {todo.id}
            className="toggle"
            value={todo.completed}
            name ={todo.title}
            onClick={this.toggleCheckBox}
            checked ={todo.completed}
            // onClick={this.}
          />

          <label for={todo.title}>{todo.title}</label>
          <button className="destroy" onClick={this.removeTask} />
        </div>
      </li>
    );
  }
}
export default TodoItems;
