import React, { Component } from "react";
import TodoItem from "./TodoItem";
import todoStore from "../Stores/TodoStore";
import { observer } from "mobx-react";
import Footer from "./Footer";

@observer
class TodoItems extends Component {
  render() {
    let result = [];
    if (todoStore.status === "Active") {
      for (let i in todoStore.todos) {
        if (!todoStore.todos[i].completed) {
          result.push(todoStore.todos[i]);
        }
      }
    } else if (todoStore.status === "Completed") {
      for (let i in todoStore.todos) {
        if (todoStore.todos[i].completed) {
          result.push(todoStore.todos[i]);
        }
      }
    }else{
      result = todoStore.todos;
    }


    return (
      <section className="main">
        <ul className="todo-list">
          
          {result.map((todo) => {
            return <TodoItem todo={todo} />;
          })}

          {/* <li>
            <div className="view">
              <input type="checkbox" className="toggle" />
              <label>new work</label>
              <button className="destry" />
            </div>
          </li> */}
          {/* <TodoItem/> */}
        </ul>
        <Footer />
      </section>
    );
  }
}
export default TodoItems;
