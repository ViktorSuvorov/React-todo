import React from 'react';

let footer = (props) => {
  let changeFilter = (event) => {
    props.updateTodo(event.target.innerText);
  };

  return (
    <>
      <div className="todo-footer">
        <button autoFocus onClick={changeFilter}>
          all
        </button>
        <button onClick={changeFilter}>active</button>
        <button onClick={changeFilter}>completed</button>
      </div>
      <div className="footer-info">Double-click on text to edit a todo</div>
    </>
  );
};

export default footer;
