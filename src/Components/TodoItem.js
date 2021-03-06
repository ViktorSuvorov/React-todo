/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useRef } from 'react';

let todoItem = (props) => {
  const [isComponentVisible, setIsComponentVisible] = useState(false);

  const ref = useRef(null);

  const handleClickOutside = () => {
    setIsComponentVisible(false);
  };

  const createRef = (event) => {
    ref.current = event;
  };

  const handleKeyUp = (event) => {
    if (event.keyCode === 13) {
      setIsComponentVisible(false);
    }
  };

  return (
    <div className="todo-item">
      {!isComponentVisible && (
        <label>
          <input
            id="todo-item-checkbox"
            type="checkbox"
            checked={props.todo.complete}
            onChange={props.toggleComplete}
          ></input>
          <span></span>
        </label>
      )}
      <div
        className={
          props.todo.complete ? 'todo-item--completed' : 'todo-item--active'
        }
        onDoubleClick={() => setIsComponentVisible(true)}
      >
        {' '}
        {isComponentVisible && (
          <div>
            <input
              ref={createRef}
              autoFocus
              type="text"
              value={props.todo.text}
              onKeyUp={handleKeyUp}
              onChange={props.handleChangeRow}
              onBlur={handleClickOutside}
            />
          </div>
        )}
        {!isComponentVisible && props.todo.text}
      </div>
      {!isComponentVisible && <button onClick={props.deleteTodo}>X</button>}
    </div>
  );
};

export default todoItem;
