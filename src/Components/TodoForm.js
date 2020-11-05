import React, { Component } from 'react';

class TodoForm extends Component {
  state = {
    text: '',
  };
  handleChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({
      id: new Date() + Math.random(),
      text: this.state.text,
      complete: false,
    });
    this.setState({ text: '' });
  };

  render() {
    return (
      <form className="todo-form" onSubmit={this.handleSubmit}>
        <input
          value={this.state.text}
          onChange={this.handleChange}
          id="todo-form-input"
          name="text"
          placeholder="What needs to be done?"
        />
      </form>
    );
  }
}

export default TodoForm;
