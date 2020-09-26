import React, { useState } from 'react';
import { TodoListItem } from './TodoListItem';

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
  const [todos, toggleTodos] = useState(initialTodos);
  return (
    <>
    <TodoListItem todo={todos[0]} />
    <TodoListItem todo={todos[1]} />
    </>);
}

export default App;
