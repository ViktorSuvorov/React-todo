import React, { useState, useEffect, useRef } from "react";

export default (props) => {
  const [isComponentVisible, setIsComponentVisible] = useState(false);

  const ref = useRef(null);
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsComponentVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return (
    <div className="todo-item">
      {!isComponentVisible && (
        <button id="button-complete" onClick={props.toggleComplete}>
          ✓
        </button>
      )}
      <label
        className={
          props.todo.complete ? "todo-item--completed" : "todo-item--active"
        }
        onDoubleClick={() => setIsComponentVisible(true)}
      >
        {" "}
        {isComponentVisible && (
          <div ref={ref}>
            <input
              type="text"
              value={props.todo.text}
              onKeyUp={(event) => {
                if (event.keyCode === 13) {
                  setIsComponentVisible(false);
                }
              }}
              onChange={props.handleChangeRow}
            />
          </div>
        )}
        {!isComponentVisible && props.todo.text}
      </label>
      {!isComponentVisible && <button onClick={props.deleteTodo}>X</button>}
    </div>
  );
};
