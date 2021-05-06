import React from 'react';
import PropTypes from 'prop-types';

export const TodoItem = ({ todo, removeTodo, onComplete }) => (
  <li>
    <div className={todo.completed ? 'completed' : 'view'}>
      <input
        type="checkbox"
        checked={todo.completed}
        className="toggle"
        onClick={() => onComplete(todo.id)}
      />
      <label>{todo.title}</label>
      <button
        type="button"
        className="destroy"
        onChange={() => removeTodo(todo.id)}
      />
    </div>
    <input type="text" className="edit" />
  </li>
);

TodoItem.propTypes = {
  onComplete: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  todo: PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
