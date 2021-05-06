import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { TodoItem } from '../TodoItem/TodoItem';

export const TodoList = ({ filteredTodos, removeTodo, onComplete }) => (
  filteredTodos.length > 0
  && (
  <ul className="todo-list">
    {filteredTodos.map(todo => (
      <Fragment key={todo.id}>
        <TodoItem
          todo={todo}
          removeTodo={removeTodo}
          onComplete={onComplete}
        />
      </Fragment>
    ))}
  </ul>
  ));

TodoList.propTypes = {
  onComplete: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  filteredTodos: PropTypes.arrayOf(
    PropTypes.shape({
      completed: PropTypes.bool.isRequired,
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
