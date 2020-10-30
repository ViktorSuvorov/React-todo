import React from 'react';

export default (props) => (
    <div className='todo-footer'>
    <button onClick={props.updateTodoToShowAll}>F all</button>
    <button onClick={props.updateTodoToShowActive}>F active</button>
    <button onClick={props.updateTodoToShowCompleted}>F completed</button>
    </div>
    )