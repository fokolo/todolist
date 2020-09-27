import React, { useState } from 'react';
import { TodoList } from './TodoList';
import { AddTodoForm } from './AddTodoForm';

const initialTodos: Todo[] = [
  {
    text: 'Task A',
    complete: true,
  },
  {
    text: 'Task B',
    complete: false,
  }
]

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });

    setTodos(newTodos);
  }

  const addTodo: AddTodo = (todoText) => {
    const newTodo: Todo = {
      text: todoText,
      complete: false
    }
    setTodos([
      ...todos,
      newTodo
    ]);
  }

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
    </>);
}

export default App;
