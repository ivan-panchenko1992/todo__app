import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const TodoItem = ({ todo, removeTodo, onComplete, addNewTitle }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editedTitle, setEditTitle] = useState(todo.title);

  const handleChangeTitle = (event, todoToedit) => {
    if (event.key === 'Enter' && editedTitle !== '') {
      setIsEdit(false);
      addNewTitle(todoToedit, editedTitle);
      setEditTitle('');
    }

    if (event.key === 'Escape') {
      setIsEdit(false);
      setEditTitle(todo.title);
    }
  };

  return (
    <li
      onDoubleClick={() => setIsEdit(true)}
      className={classNames(
        { completed: todo.completed, editing: isEdit },
      )}

    >
      <div className={todo.completed ? 'completed' : 'view'}>
        <input
          type="checkbox"
          checked={todo.completed}
          className="toggle"
          onChange={() => onComplete(todo.id)}
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
        onKeyDown={event => handleChangeTitle(event, todo)}
      />
    </li>
  );
};

TodoItem.propTypes = {
  addNewTitle: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  todo: PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
