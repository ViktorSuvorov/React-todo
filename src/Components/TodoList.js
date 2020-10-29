import React, { Component } from "react";
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
    } else if (this.state.todoFilter === 'completed') {
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
              id={todo.id}
              todo={todo}
            />
          ))}
          <div>
            items left:{" "}
            {this.state.todos.filter((todo) => !todo.complete).length}
          </div>
          <div>
            <button onClick={() => this.updateTodoToShow("all")}>all</button>
            <button onClick={() => this.updateTodoToShow("active")}>
              active
            </button>
            <button onClick={() =>console.log(this.updateTodoToShow("completed"))}>
              completed
            </button>
          </div>
        </ul>
      </div>
    );
  }
}

export default TodoList;
