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
    this.numberOfTask++;
  }

  @action
  toggle(passid) {
    for (let i in this.todos) {
      if (this.todos[i].id === passid) {
        if(this.todos[i].completed){
          this.numberOfTask++;
        }else{
          this.numberOfTask--;
        }
        this.todos[i].completed = !this.todos[i].completed;
        console.log("toggle the todo");
      }
    }
  }

  @action
  remove(passid) {
    var filtered = this.todos.filter((t) => t.id !== passid);
    this.todos.replace(filtered);
    this.numberOfTask = this.numberOfRemainTasks()
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
  numberOfRemainTasks() {
    let temp=0;
    for (let i in this.todos) {
      if (!this.todos[i].completed) {
        temp++;
      }
    }
    return temp;
  }
}
const store = new TodoStore();

export default store;
