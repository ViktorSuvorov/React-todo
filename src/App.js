import React, { Component } from 'react';
import Header from './Components/Header';
import TodoList from './Components/TodoList';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <TodoList />
      </div>
    );
  }
}

export default App;
