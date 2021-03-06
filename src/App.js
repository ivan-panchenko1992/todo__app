import React, { useState, useMemo, useCallback } from 'react';
import { TodoList } from './components/TodoList';
import { TodoForm } from './components/TodoForm/TodoForm';
import { TodoFilter } from './components/TodoFilter';
import { useLocalStorage } from './LocalStorage';

function App() {
  const [todos, setTodos] = useLocalStorage('todos', []);
  const [filter, setFilter] = useState('all');
  const [completed, setCompleted] = useState(false);

  const filterTodos = useCallback((filterBy) => {
    switch (filterBy) {
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  }, [todos]);

  const addTodo = (title) => {
    setTodos(prevTodos => [
      ...prevTodos, {
        id: +new Date(),
        title,
        completed: false,
      }]);
  };

  const deleteCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const removeTodo = (todoId) => {
    setTodos(todos.filter(todo => todo.id !== todoId));
  };

  const CheckBoxToggle = () => {
    if (completed) {
      setCompleted(false);
      setTodos(todos.map(todo => ({
        ...todo,
        completed: true,
      })));
    }

    if (!completed) {
      setCompleted(true);
      setTodos(todos.map(todo => ({
        ...todo,
        completed: false,
      })));
    }
  };

  const handleComplete = (todoId) => {
    setTodos(todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }

      return todo;
    }));
  };

  const addNewTitle = (selectedTodo, editedTitle) => {
    const findSelectedTodo = todos.find(todo => selectedTodo.id === todo.id);

    findSelectedTodo.title = editedTitle;
  };

  const changeFilter = filterValue => setFilter(filterValue);

  const filteredTodos = useMemo(
    () => filterTodos(filter), [filter, filterTodos],
  );

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <TodoForm
          addTodo={addTodo}
          filter={filter}
        />
      </header>

      <section className="main">
        <input
          type="checkbox"
          id="toggle-all"
          className="toggle-all"
          onClick={CheckBoxToggle}
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <TodoList
          filteredTodos={filteredTodos}
          removeTodo={removeTodo}
          onComplete={handleComplete}
          addNewTitle={addNewTitle}
        />
      </section>

      <footer className="footer">
        <span className="todo-count">
          {`${todos.length} items left`}
        </span>
        <TodoFilter
          changeFilter={changeFilter}
          filter={filter}
        />
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
