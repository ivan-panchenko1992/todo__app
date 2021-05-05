import React, { useState, useEffect } from 'react';
import { TodoList } from './components/TodoList';
import { TodoForm } from './components/TodoForm/TodoForm';
import { TodoFilter } from './components/TodoFilter';

function App() {
  const [todos, setTodos] = useState([]);
  const [select, setSelect] = useState('all');

  useEffect(() => {
    if (!todos.length) {
      return;
    }

    switch (select) {
      case 'active':
        setTodos(noCompletedTodos);
        break;
      case 'completed':
        setTodos(completedTodos);
        break;
      default:
        setTodos(todos);
        break;
    }
  }, [select]);

  const addTodo = (title) => {
    setTodos(prevTodos => [
      ...prevTodos, {
        id: +new Date(),
        title,
        completed: false,
      }]);
  };

  const completedTodos = todos.map(todo => todo.completed);
  const noCompletedTodos = todos.map(todo => !todo.completed);
  const deleteCompleted = () => {
    setTodos(prevTodos => prevTodos.map(todo => todo.completed));
  };

  const removeTodo = (todoId) => {
    setTodos(todos.filter(todo => todo.id !== todoId));
  };

  const changeFilter = filter => setSelect(filter);

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <TodoForm addTodo={addTodo} />
      </header>

      <section className="main">
        <input type="checkbox" id="toggle-all" className="toggle-all" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <TodoList
          todos={todos}
          removeTodo={removeTodo}
        />
      </section>

      <footer className="footer">
        <span className="todo-count">
          3 items left
        </span>
        <TodoFilter changeFilter={changeFilter} />
        <button
          type="button"
          className="clear-completed"
          onClick={deleteCompleted}
        >
          Clear completed
        </button>
      </footer>
    </section>
  );
}

export default App;
