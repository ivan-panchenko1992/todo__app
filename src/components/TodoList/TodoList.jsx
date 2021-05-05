import React from 'react';
import { TodoItem } from '../TodoItem/TodoItem';

export const TodoList = ({ todos, removeTodo }) => (
  <ul className="todo-list">
    {todos.map(todo => (
      <TodoItem
        todo={todo}
        removeTodo={removeTodo}
      />
    ))}
  </ul>
);
