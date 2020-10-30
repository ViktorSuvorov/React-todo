import React, { Component } from "react";
import Footer from "./Footer";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  state = {
    todos: [],
    todoFilter: "all",
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

  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            id: todo.id,
            text: todo.text,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      }),
    });
  };

  updateTodoToShow = (show) => {
    this.setState({
      todoFilter: show,
    });
  };

  render() {
    let todos = [];

    if (this.state.todoFilter === "all") {
      todos = this.state.todos;
    } else if (this.state.todoFilter === "active") {
      todos = this.state.todos.filter((todo) => !todo.complete);
    } else if (this.state.todoFilter === "completed") {
      todos = this.state.todos.filter((todo) => todo.complete);
    }

    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
        <ul>
          {todos.map((todo) => (
            <TodoItem 
              key={todo.id}
              toggleComplete={() => this.toggleComplete(todo.id)}
              deleteTodo={() => this.handleDeleteTodo(todo.id)}
              id={todo.id}
              todo={todo}
            />
          ))}
          <div className="todo-info">
            <div className="todo-info-item">
              items left:{" "}
              {this.state.todos.filter((todo) => !todo.complete).length}
            </div>
            <div className="todo-info-item">
              items completed:
              {this.state.todos.filter((todo) => todo.complete).length}
            </div>
          </div>
        </ul>
        <Footer
          updateTodoToShowAll={() => this.updateTodoToShow("all")}
          updateTodoToShowActive={() => this.updateTodoToShow("active")}
          updateTodoToShowCompleted={() => this.updateTodoToShow("completed")}
        />
      </div>
    );
  }
}

export default TodoList;
