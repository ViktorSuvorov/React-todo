import React from "react";

export default (props) => (
  <div className="todo-item">
    <button id='button-complete' onClick={props.toggleComplete}>✓</button>
    <li
      className={
        props.todo.complete ? "todo-item--completed" : "todo-item--active"
      } 
    >
      {" "}
      {props.todo.text}
    </li>
    <button onClick={props.deleteTodo}>X</button>
  </div>
);
