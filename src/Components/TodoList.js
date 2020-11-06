import React, { Component } from 'react';
import Footer from './Footer';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
class TodoList extends Component {
  state = {
    todos: [],
    todoFilter: 'all',
  };

  addTodo = (todo) => {
    this.setState({
      todos: [todo, ...this.state.todos],
    });
  };

  handleDeleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  };

  handleChangeRow = (event, id) => { 
    const changeTodos = (event,id) => {
      const todoIndex = this.state.todos.findIndex(todo => todo.id === id)
      const todos = [...this.state.todos]
      todos[todoIndex].text = event.target.value
      return todos
    }
    this.setState({
      todos: changeTodos(event,id)
    });
  };

  toggleComplete = (id) => {
    const revertComplete = (id) => {
      const todoIndex = this.state.todos.findIndex(todo => todo.id === id)
      const todos = [...this.state.todos]
      todos[todoIndex].complete = !todos[todoIndex].complete
      return todos
    }
    this.setState({
      todos: revertComplete(id)
    });
  };

  updateTodoToShow = (show) => {
    this.setState({
      todoFilter: show,
    });
  };

  getTodoList = () => {
    const { todos, todoFilter } = this.state;
    if (todoFilter === 'active') {
      return todos.filter((todo) => !todo.complete);
    }
    if (todoFilter === 'completed') {
      return todos.filter((todo) => todo.complete);
    }
    return todos;
  };

  render() {
    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
        <ul>
          {this.getTodoList().map((todo) => (
            <TodoItem
              key={todo.id}
              toggleComplete={() => this.toggleComplete(todo.id)}
              deleteTodo={() => this.handleDeleteTodo(todo.id)}
              id={todo.id}
              todo={todo}
              handleChangeRow={(event) => this.handleChangeRow(event, todo.id)}
            />
          ))}
          <div className="todo-info">
            <div className="todo-info-item">
              items left:{' '}
              {this.state.todos.filter((todo) => !todo.complete).length}
            </div>
            <div className="todo-info-item">
              items completed:
              {this.state.todos.filter((todo) => todo.complete).length}
            </div>
          </div>
        </ul>
        <Footer updateTodo={this.updateTodoToShow}
        />
      </div>
    );
  }
}

export default TodoList;
