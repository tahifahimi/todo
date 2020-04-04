import React, { Component } from "react";
import todoStore from "../Stores/TodoStore";


class Footer extends Component {
  ActiveTask = () => {
    todoStore.changeWhatShows("Active");
  };
  AllTask = () =>{
    todoStore.changeWhatShows("All")  
  }

  CompletedTask = () => {
    todoStore.changeWhatShows("Completed")
  };

  render() {
    return (
      <div>
        <footer class="footer">
          {/* <!-- This should be `0 items left` by default --> */}
          <span class="todo-count">
            <strong>{todoStore.todos.length}</strong> item left
          </span>
          {/* <!-- Remove this if you don't implement routing --> */}
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
          {/* <!-- Hidden if no completed items are left ↓ --> */}
          <button class="clear-completed">Clear completed</button>
        </footer>
      </div>
    );
  }
}
export default Footer;
