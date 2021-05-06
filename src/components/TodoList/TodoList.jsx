import React, { Fragment } from 'react';
import { TodoItem } from '../TodoItem/TodoItem';

export const TodoList = ({ filteredTodos, removeTodo }) => (
  <ul className="todo-list">
    {filteredTodos.map(todo => (
      <Fragment key={todo.id}>
        <TodoItem
          todo={todo}
          removeTodo={removeTodo}
        />
      </Fragment>
    ))}
  </ul>
);

// TodoList.propTypes = {
//   filteredTodos: PropTypes.arrayOf(
//     PropTypes.shape({

//     })
//   )
// };
