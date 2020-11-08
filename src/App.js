import React from 'react';
import { connect } from 'react-redux';
import Header from './Components/Header';
import TodoList from './Components/TodoList';
import Footer from './Components/Footer';
import { deleteTodo, toggleTodo } from './redux/actions/actions';
import { setFilter } from './redux/actions/actions';
import { getVisibleTodos } from './redux/selectors/selectors';

const App = (props) => {
  const { todosFiltred, onsetFilter } = props;
  return (
    <div className="App">
      <Header />
      <div className="App__list">
        <TodoList todos={todosFiltred} />
        <Footer setFilter={onsetFilter} />
      </div>
    </div>
  );
};

const mapStateToProps = (store) => ({
  todosFiltred: getVisibleTodos(store),
  todos: store.todoReducer.todos,
  filter: store.filterReducer.filter,
});

const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (id) => dispatch(deleteTodo(id)),
  toggleTodo: (id) => dispatch(toggleTodo(id)),
  onsetFilter: (filter) => dispatch(setFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
