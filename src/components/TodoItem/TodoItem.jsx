import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const TodoItem = ({ todo, removeTodo, onComplete, editTitle }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editedTitle, setEditTitle] = useState('');

  return (
    <li
      onDoubleClick={() => setIsEdit(true)}
      className={isEdit && 'editing'}
    >
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
          onClick={() => removeTodo(todo.id)}
        />
      </div>
      <input
        type="text"
        className="edit"
        value={editedTitle}
        onChange={event => setEditTitle(event.target.value)}
        onKeyDown={() => editTitle(todo, editedTitle)}
      />
    </li>
  );
};

TodoItem.propTypes = {
  editTitle: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  todo: PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
