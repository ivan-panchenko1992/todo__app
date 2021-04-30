import React, { useState } from 'react';

export const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(title);
    setTitle('');
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
