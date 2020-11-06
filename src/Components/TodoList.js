import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ADD_TODO, TOGGLE_TODO } from '../redux/actions/actionTypes';
import Footer from './Footer';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import {deleteTodo, toggleTodo} from '../redux/actions/actions'
class TodoList extends Component {

  addTodo = (todo) => {
    this.setState({
      todos: [todo, ...this.props.todos],
    });
  };

  handleDeleteTodo = () => {
   
  };

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

  toggleComplete = () => {
    const {onToggleTodo,id} = this.props;
    onToggleTodo(id)
    console.log(id)
  };

  updateTodoToShow = (show) => {
    this.setState({
      todoFilter: show,
    });
  };

  getTodoList = () => {
    const todos = this.props.todos;
    const todoFilter = this.props.todoFilter
    if (todoFilter === 'active') {
      return todos.filter((todo) => !todo.complete);
    }
    if (todoFilter === 'completed') {
      return todos.filter((todo) => todo.complete);
    }
    return todos;
  };
  render() {
    console.log('app',this.props)
  
    return (
      <div>
        <TodoForm/>
        <ul>
          {this.getTodoList().map((todo) => (
            <TodoItem
              key={todo.id}
              toggleComplete={this.props.onToggleTodo}
              deleteTodo={() => this.handleDeleteTodo}
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
        <Footer updateTodo={this.updateTodoToShow} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos:state.todos,
  todoFilter:state.todoFilter
})

const mapDispatchToProps = dispatch => ({
onDeleteTodo:(id) => dispatch(deleteTodo(id)),
onToggleTodo:(id) => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
