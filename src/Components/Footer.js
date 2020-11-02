import React from 'react';

export default (props) => (
    <div className='todo-footer'>
    <button onClick={props.updateTodoToShowAll}>All</button>
    <button onClick={props.updateTodoToShowActive}>Active</button>
    <button onClick={props.updateTodoToShowCompleted}>Completed</button>
    </div>
    )