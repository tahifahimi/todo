import { observable, action } from "mobx";
import TodoModel from "./TodoModel";

class TodoStore {
  @observable todos = [{
    title :"Dog",
    id :100,
    completed:false
  }];
  lastId = 0;

  @action
  //  create new todo model
  addTodo(title) {
    this.todos.push(new TodoModel(this, title, false, this.lastId++));
  }

  toggle(toggletodo){
    for(let i in this.todos){
      if(this.todos[i].id == toggletodo.id){
        this.todos[i].completed = !this.todos[i].completed
        console.log("toggle the todo")
      }
    }
  }
}
const store = new TodoStore();

export default store;
