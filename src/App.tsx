import React, { useState } from 'react';
import { Backdrop, Zoom } from '@material-ui/core';
import { CheckCircle } from '@material-ui/icons';
import { green } from '@material-ui/core/colors';
import { TodoList } from './TodoList';
import 'fontsource-roboto';


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
      }, 750)
    }
    setTodos(newTodos);
  }

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <Backdrop open={backdropOpen} style={{ zIndex: 1000, backgroundColor: 'rgba(0, 0, 0, 0.10)' }} onClick={() => { setBackdropOpen(false) }}>
        <Zoom in={backdropOpen}>
          <CheckCircle style={{ color: green[500], fontSize: 100 }} />
        </Zoom>
      </Backdrop>
    </>);
}

export default App;
