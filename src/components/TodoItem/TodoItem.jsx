import React from 'react';
import PropTypes from 'prop-types';

export const TodoItem = ({ todo, removeTodo }) => {
  return (
    <li>
      <div className="view">
        <input type="checkbox" className="toggle" />
        <label>{todo.title}</label>
        <button
          type="button"
          className="destroy"
          onClick={() => removeTodo(todo.id)}
        />
      </div>
      <input type="text" className="edit" />
    </li>
  );
};
