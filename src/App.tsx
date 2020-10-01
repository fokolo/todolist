import React, { useState } from 'react';
import { TodoList } from './TodoList';
import { CompletedBackdrop } from './CompletedBackdrop';


const initialTodos: Todo[] = [
  {
    id: 0,
    text: 'Task A',
    complete: false,
    cash: 500
  },
  {
    id: 1,
    text: 'Task B',
    complete: false,
    cash: 250
  },
  {
    id: 2,
    text: 'A Very long Completed Task, Maybe even much longer',
    complete: true,
    cash: 125
  },
]

function App() {
  const [backdropOpen, setBackdropOpen] = useState(false);
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = (id: number) => {
    let todoToToggleIndex = todos.findIndex(curTodo => curTodo.id === id)
    let newTodos = [...todos];
    newTodos[todoToToggleIndex] = { ...newTodos[todoToToggleIndex], complete: !newTodos[todoToToggleIndex].complete }
    if (newTodos[todoToToggleIndex].complete) {
      setBackdropOpen(true)
      setTimeout(() => {
        setBackdropOpen(false)
      }, 500)
    }
    setTodos(newTodos);
  }

  const addTodo: AddTodo = (text: string, complete: boolean, cash: number) => {
    let newTodo: Todo = {
      text: text,
      complete: complete,
      cash: cash,
      id: todos.length
    };
    const newTodos: Todo[] = [...todos, newTodo]
    setTodos(newTodos);
  }

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} addTodo={addTodo} />
      <CompletedBackdrop backdropOpen={backdropOpen} setBackdropOpen={setBackdropOpen} />
    </>);
}

export default App;
