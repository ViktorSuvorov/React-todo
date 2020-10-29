import React, { Component } from "react";
// import TodoForm from './Components/TodoForm'
import Header from './Components/Header'
import TodoList from './Components/TodoList'

class App extends Component {

  render() {
    return (
    <div className="App">
    
    <Header />  
    <TodoList />
    </div>
    )
  }
}

export default App;
