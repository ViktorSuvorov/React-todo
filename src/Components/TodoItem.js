import React from "react";

export default (props) => (
  <div className="todo-item">
    <button id="button-complete" onClick={props.toggleComplete}>
      ✓
    </button>
    <label onChange={props.updateTodo}
      className={
        props.todo.complete ? "todo-item--completed" : "todo-item--active"
      }
    >
      {" "}
      {props.todo.text}
    </label>
    <button onClick={props.deleteTodo}>X</button>
  </div>
);
