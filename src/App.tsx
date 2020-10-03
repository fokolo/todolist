import React, { useState } from 'react';
import { TodoList } from './TodoList';
import { CompletedBackdrop } from './CompletedBackdrop';
import { TopAppBar } from './TopAppBar';
import { BottomAppNav } from './BottomAppNav';
import { Container, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Authentication } from './Authentication';

firebase.initializeApp({
  apiKey: "AIzaSyCnjOQfm5TzEZjHZ0LedcsEet0Sqjl0-7M",
  authDomain: "gamified-todo-app.firebaseapp.com",
  databaseURL: "https://gamified-todo-app.firebaseio.com",
  projectId: "gamified-todo-app",
  storageBucket: "gamified-todo-app.appspot.com",
  messagingSenderId: "977360156689",
  appId: "1:977360156689:web:0a2162a2d5f023f39b19b0",
  measurementId: "G-B9S1LMLB1F"
})

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();


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
  const [user] = useAuthState(auth);
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
      <TopAppBar coins={coins}>
        <Authentication user={user} auth={auth} />
      </TopAppBar>
      <Box p={1}>
        <TodoList todos={todos} toggleTodo={toggleTodo} addTodo={addTodo} />
      </Box>
      <BottomAppNav />
    </Container>

    <CompletedBackdrop backdropOpen={backdropOpen} setBackdropOpen={setBackdropOpen} />
  </>);

}

export default App;
