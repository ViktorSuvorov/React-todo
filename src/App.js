import React from 'react';
import { connect } from 'react-redux';
import Header from './Components/Header';
import TodoList from './Components/TodoList';
import Footer from './Components/Footer';
import PropTypes from 'prop-types';
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
  onsetFilter: (filter) => dispatch(setFilter(filter)),
});

App.propTypes = {
  todosFiltred: PropTypes.instanceOf(Array).isRequired,
  onsetFilter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
