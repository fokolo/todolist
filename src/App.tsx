import React, { useState } from 'react';
import { Backdrop, Zoom } from '@material-ui/core';
import { CheckCircle } from '@material-ui/icons';
import { green } from '@material-ui/core/colors';
import { TodoList } from './TodoList';
import 'fontsource-roboto';


const todos: Todo[] = [
  {
    text: 'Task A',
    complete: false,
    cash: 500
  },
  {
    text: 'Task B',
    complete: false,
    cash: 250
  },
  {
    text: 'A Very long Completed Task, Maybe even much longer',
    complete: true,
    cash: 125
  },
]

function App() {
  const [backdropOpen, setBackdropOpen] = useState(true);

  return (
    <>
      <TodoList todos={todos} />
      <Backdrop open={backdropOpen} style={{ zIndex: 1000 }} onClick={() => { setBackdropOpen(false) }}>
        <Zoom in={backdropOpen}>
          <CheckCircle style={{ color: green[500], fontSize: 100 }} />
        </Zoom>
      </Backdrop> 
    </>);
}

export default App;
