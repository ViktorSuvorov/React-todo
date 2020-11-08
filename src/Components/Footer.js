import React from 'react';
import {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED,
} from '../redux/actions/actionTypes';
import {ALL,ACTIVE,COMPLETED} from '../constants'

const Footer = (props) => {
  const { setFilter } = props;
  const changeFilter = (e) => {
    if (e.target.innerText === ALL) {
      setFilter(SHOW_ALL);
    }
    if (e.target.innerText === ACTIVE) {
      setFilter(SHOW_ACTIVE);
    }
    if (e.target.innerText === COMPLETED) {
      setFilter(SHOW_COMPLETED);
    }
  };
  return (
    <>
      <div className="todo-footer">
        <button autoFocus onClick={changeFilter}>
         {ALL}
        </button>
        <button onClick={changeFilter}>{ACTIVE}</button>
        <button onClick={changeFilter}>{COMPLETED}</button>
      </div>
      <div className="footer-info">Double-click on text to edit a todo</div>
    </>
  );
};

export default Footer;
