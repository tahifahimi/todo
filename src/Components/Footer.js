import React, { Component } from "react";
import todoStore from "../Stores/TodoStore";
import { observer } from "mobx-react";

@observer
class Footer extends Component {
  ActiveTask = () => {
    todoStore.changeWhatShows("Active");
  };
  AllTask = () => {
    todoStore.changeWhatShows("All");
  };

  CompletedTask = () => {
    todoStore.changeWhatShows("Completed");
  };
  clearAll = () => {
    todoStore.removeCompletedTasks();
  };
  RemainTasks = () => {
    todoStore.numberOfRemainTasks();
    // let numberOfTask = 0;
    // for (let i in todoStore.todos) {
    //   if (!todoStore.todos[i].completed) {
    //     numberOfTask++;
    //   }
    // }
    // return numberOfTask;
  };

  render() {
    return (
      <div>
        <footer class="footer">
          <span class="todo-count">
            <strong>{todoStore.numberOfTask}</strong> item left
          </span>
          <ul class="filters">
            <li>
              <a class="selected" href="#/All" onClick={this.AllTask}>
                All
              </a>
            </li>
            <li>
              <a href="#/active" onClick={this.ActiveTask}>
                Active
              </a>
            </li>
            <li>
              <a href="#/completed" onClick={this.CompletedTask}>
                Completed
              </a>
            </li>
          </ul>
          <button class="clear-completed" onClick={this.clearAll}>
            Clear completed
          </button>
        </footer>
      </div>
    );
  }
}
export default Footer;
