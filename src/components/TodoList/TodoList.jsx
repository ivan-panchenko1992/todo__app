import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { TodoItem } from '../TodoItem/TodoItem';

export const TodoList = ({
  filteredTodos,
  removeTodo,
  onComplete,
  addNewTitle,
}) => (
  filteredTodos.length > 0
  && (
  <ul className="todo-list">
    {filteredTodos.map(todo => (
      <Fragment key={todo.id}>
        <TodoItem
          todo={todo}
          removeTodo={removeTodo}
          onComplete={onComplete}
          addNewTitle={addNewTitle}
        />
      </Fragment>
    ))}
  </ul>
  ));

TodoList.propTypes = {
  addNewTitle: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  filteredTodos: PropTypes.arrayOf(
    PropTypes.shape({
      completed: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
