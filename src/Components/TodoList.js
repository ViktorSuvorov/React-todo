import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import { deleteTodo, toggleTodo } from '../redux/actions/actions';
import PropTypes from 'prop-types';
class TodoList extends Component {
  handleChangeRow = (event, id) => {
    const changeTodos = (event, id) => {
      const todoIndex = this.props.todos.findIndex((todo) => todo.id === id);
      const todos = [...this.props.todos];
      todos[todoIndex].text = event.target.value;
      return todos;
    };
    this.setState({
      todos: changeTodos(event, id),
    });
  };

  render() {
    console.log('app', this.props);
    const { onDeleteTodo, onToggleTodo, todos } = this.props;
    return (
      <div>
        <TodoForm />
        <ul>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              toggleComplete={() => onToggleTodo(todo.id)}
              deleteTodo={() => onDeleteTodo(todo.id)}
              id={todo.id}
              todo={todo}
              handleChangeRow={(event) => this.handleChangeRow(event, todo.id)}
            />
          ))}
          <div className="todo-info">
            <div className="todo-info-item">
              items left:{' '}
              {this.props.todos.filter((todo) => !todo.complete).length}
            </div>
            <div className="todo-info-item">
              items completed:
              {this.props.todos.filter((todo) => todo.complete).length}
            </div>
          </div>
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onDeleteTodo: (id) => dispatch(deleteTodo(id)),
  onToggleTodo: (id) => dispatch(toggleTodo(id)),
});

TodoList.propTypes = {
  onDeleteTodo: PropTypes.func.isRequired,
  onToggleTodo: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(TodoList);
