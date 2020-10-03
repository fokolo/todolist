import React, { useState } from 'react';
import { TodoList } from './TodoList';
import { CompletedBackdrop } from './CompletedBackdrop';
import { TopAppBar } from './TopAppBar';
import { BottomAppNav } from './BottomAppNav';
import { Container, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const initialTodos: Todo[] = [
];

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
  const [coins, setTotalCoins] = useState(0);
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
    updateTodos(newTodos);
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
    updateTodos(newTodos);
  }

  function sortTodos(newTodos: Todo[]): Todo[] {
    newTodos.sort((a, b) => {
      if (a.complete === b.complete) {
        return a.id - b.id;
      }
      return a.complete ? 1 : -1;
    });
    return newTodos;
  }

  function calculateTotalCoins(todos: Todo[]): number {
    return todos.filter(item => item.complete === true)
      .reduce((sum: number, currentElement: Todo) => {
        return sum + currentElement.coins;
      }, 0);
  }

  const updateTodos: UpdateTodos = (newTodos) => {
    if (newTodos.length > 0) {
      setTodos(sortTodos(newTodos));
      setTotalCoins(calculateTotalCoins(newTodos));
    }
  }

  return (< >
    <Container className={classes.root}>
      <TopAppBar coins={coins} />
      <Box p={1}>
        <TodoList todos={todos} toggleTodo={toggleTodo} addTodo={addTodo} />
      </Box>
      <BottomAppNav />
    </Container>

    <CompletedBackdrop backdropOpen={backdropOpen} setBackdropOpen={setBackdropOpen} />
  </>);

}

export default App;
