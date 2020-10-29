import React from 'react'

export default props => (
<li className={props.todo.complete ? 'todo-item--completed' : 'todo-item' } onClick={props.toggleComplete}> {props.todo.text}</li>);
