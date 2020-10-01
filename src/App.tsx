import React, { useState } from 'react';
import { TodoList } from './TodoList';
import { CompletedBackdrop } from './CompletedBackdrop';
import { TopAppBar } from './TopAppBar';
import { BottomAppNav } from './BottomAppNav';
import { Container, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const initialTodos: Todo[] = [
  {
    id: 0,
    text: 'Task A',
    complete: false,
    coins: 500
  },
  {
    id: 1,
    text: 'Task B',
    complete: false,
    coins: 250
  },
  {
    id: 2,
    text: 'A Very long Completed Task, Maybe even much longer',
    complete: true,
    coins: 125
  },
]

const useStyles = makeStyles(() => ({
  root: {
    height: '100vh',
    padding: 0,
  },
  lastItem: {
    marginTop: 'auto',
  },
}));

function App() {
  const [backdropOpen, setBackdropOpen] = useState(false);
  const [todos, setTodos] = useState(initialTodos);
  const [coins, setCoins] = useState(0);
  const classes = useStyles();

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
    setAndSortTodos(newTodos);
  }

  const addTodo: AddTodo = (text: string, complete: boolean, coins: number) => {
    if (text === '') {
      return
    }
    let newTodo: Todo = {
      text: text,
      complete: complete,
      coins: coins,
      id: todos.length
    };
    const newTodos: Todo[] = [...todos, newTodo]
    setAndSortTodos(newTodos);
  }

  const setAndSortTodos: (newTodos: Todo[]) => void = (newTodos) => {
    newTodos.sort((a, b) => {
      if (a.complete === b.complete) {
        return a.id - b.id;
      }
      return a.complete ? 1 : -1;
    })
    setTodos(newTodos);
    console.log(newTodos);
  }

  return (< >
    <Container className={classes.root}>
      <TopAppBar />
      <Box p={1}>
        <TodoList todos={todos} toggleTodo={toggleTodo} addTodo={addTodo} />
      </Box>
      <BottomAppNav />
    </Container>

    <CompletedBackdrop backdropOpen={backdropOpen} setBackdropOpen={setBackdropOpen} />
  </>);
}

export default App;
