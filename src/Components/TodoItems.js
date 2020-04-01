import React, { Component } from "react";
import TodoItem from './TodoItem'
import todoStore from '../Stores/TodoStore';
import {observer} from 'mobx-react'

@observer
class TodoItems extends Component {
  render() {
    return (
        <section className="main">
          <ul className="todo-list">
            {
              todoStore.todos.map(todo=>{
                return(
                  <TodoItem todo = {todo}/>
                )
              })
            }
            <li>
              <div className="view">
                <input type="checkbox" className="toggle" />
                <label>new work</label>
                <button className="destry" />
              </div>
            </li>
  {/* <TodoItem/> */}
          </ul>
        </section>
    );
  }
}
export default TodoItems