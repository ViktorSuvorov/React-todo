import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions/actions';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    text: '',
  };
  }
  
  handleChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  handleSubmit = (event) => {
    const {text} = this.state;
    const {onAddTodo} = this.props;
    event.preventDefault();
    onAddTodo(text);
    this.setState({ text: '' });
  };

  render() {
    const {text} = this.state
    return (
      <form className="todo-form" onSubmit={this.handleSubmit}>
        <input
          value={text}
          onChange={this.handleChange}
          id="todo-form-input"
          name="text"
          placeholder="What needs to be done?"
        />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onAddTodo:(text) => dispatch(addTodo(text)),
});

export default connect(null,mapDispatchToProps)(TodoForm)
