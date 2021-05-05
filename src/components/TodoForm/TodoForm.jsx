import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title.length > 0) {
      addTodo(title);
      setTitle('');
    }
  };

  return (
    <form
      onSubmit={event => handleSubmit(event)}
    >
      <input
        type="text"
        className="new-todo"
        placeholder="What needs to be done?"
        value={title}
        onChange={event => setTitle(event.target.value)}
      />
    </form>
  );
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
