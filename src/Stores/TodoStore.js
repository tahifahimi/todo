import { observable, action } from "mobx";
import TodoModel from "./TodoModel";

class TodoStore {
  @observable todos = [];
  @observable status = "All";
  @observable numberOfTask = 0;

  lastId = 0;

  @action
  addTodo(title) {
    this.todos.push(new TodoModel(this, title, false, this.lastId++));
  }

  @action
  toggle(toggletodo) {
    for (let i in this.todos) {
      if (this.todos[i].id === toggletodo.id) {
        this.todos[i].completed = !this.todos[i].completed;
        console.log("toggle the todo");
      }
    }
  }

  @action
  remove(todo) {
    var filtered = this.todos.filter((t) => t.id !== todo.id);
    this.todos.replace(filtered);
  }

  @action
  changeWhatShows(title) {
    this.status = title;
  }

  @action
  removeCompletedTasks() {
    var i = this.todos.length;
    while (i--) {
      if (this.todos[i].completed) {
        this.todos.splice(i, 1);
      }
    }
  }

  @action
  passNumberOfActiveTask() {
    let number = 0;
    for (let i in this.todos) {
      if (!this.todos[i].completed) {
        number++;
      }
    }
    return number;
  }

  @action
  passNumberOfCompleteTask() {
    let number = 0;
    for (let i in this.todos) {
      if (this.todos[i].completed) {
        number++;
      }
    }
    return number;
  }

  @action
  number() {
    if (this.status === "All") {
      this.numberOfTask = this.todos.length;
    } else if (this.status === "Active") {
      for (let i in this.todos) {
        if (!this.todos[i].completed) {
          this.numberOfTask++;
        }
      }
    } else {
      for (let i in this.todos) {
        if (this.todos[i].completed) {
          this.numberOfTask++;
        }
      }
    }
  }
}
const store = new TodoStore();

export default store;
