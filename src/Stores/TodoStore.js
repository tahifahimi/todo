import { observable, action } from "mobx";
import TodoModel from "./TodoModel";

class TodoStore {
  @observable todos = [{
    title :"Dog",
    id :100,
    completed:true
  }];
  lastId = 0;

  @action
  //  create new todo model
  addTodo(title) {
    this.todos.push(new TodoModel(this, title, false, this.lastId++));
  }
}
const store = new TodoStore();

export default store;
