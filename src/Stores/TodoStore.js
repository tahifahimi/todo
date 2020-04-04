import { observable, action } from "mobx";
import TodoModel from "./TodoModel";

class TodoStore {
  @observable todos = [
    {
      title: "Dog",
      id: 100,
      completed: false,
    },
  ];

  @observable completed = [
    {
      title: "co",
      id: 66,
      completed: true,
    },
  ];

  @observable status = "All";

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
}
const store = new TodoStore();

export default store;
