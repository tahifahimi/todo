import React, { Component } from "react";
import TodoItem from "./TodoItem";
import todoStore from "../Stores/TodoStore";
import { observer } from "mobx-react";
import Footer from "./Footer";

@observer
class TodoItems extends Component {
  // @observer
  ShowItems = () => {
    console.log(todoStore.status);

    if (todoStore.status === "All") {
      // console.log("all are drawing");
      todoStore.todos.map((t) => {
        return <TodoItem todo={t} />;
      });
    } else if (todoStore.status === "Completed") {
      todoStore.completed.map((todo) => {
        return <TodoItem todo={todo} />;
      });
    }
  };

  render() {
    let result;
    if (todoStore.status === "All") {
      // console.log("all are drawing");
      result = todoStore.todos;
      // todoStore.todos.map((t) => {
      //   return <TodoItem todo={t} />;
      // });
    } else if (todoStore.status === "Completed") {
      let arr = [];
      for (let i in todoStore.todos) {
        if (todoStore.todos[i].completed) {
          arr.push(todoStore.todos[i]);
        }
      }
      result = arr;
      // todoStore.completed.map((todo) => {
      //   return <TodoItem todo={todo} />;
      // });
    }
    return (
      <section className="main">
        <ul className="todo-list">
          {/* {ShowItems} */}

          {/* {todoStore.todos.map((t) => {
          return <TodoItem todo={t} />;
          })
          } */}

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
