import React from "react";
import logo from "./logo.svg";
import "./App.css";

import TodoEntry from "./Components/TodoEntry";
import TodoItems from "./Components/TodoItems";

function App() {
  return (
    <div id="todoapp" className="todoapp">
      <TodoEntry />
      <TodoItems />

    </div>
  );
}

export default App;
