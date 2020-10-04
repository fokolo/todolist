import React, { useState } from 'react';
import { TodoList } from './TodoList';
import { CompletedBackdrop } from './CompletedBackdrop';
import { TopAppBar } from './TopAppBar';
import { BottomAppNav } from './BottomAppNav';
import { Container, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';
import { useAuthState } from 'react-firebase-hooks/auth';
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
  const [user, , authError] = useAuthState(auth);
  const classes = useStyles();
  const [coins, setTotalCoins] = useState(0);

  if (authError) {
    console.log(authError);
  }

  const mainPanel = () => {
    if (user) {
      return (
        <TodoList user={user} firestore={firestore} setTotalCoins={setTotalCoins} completedTask={completedTask} />
      )
    }
    else {
      return (<Typography>Please log in above</Typography>)
    }
  }

  const completedTask = () => {
    setBackdropOpen(true)
    setTimeout(() => {
      setBackdropOpen(false)
    }, 300)

  }

  return (< >
    <Container className={classes.root}>
      <TopAppBar coins={coins}>
        <Authentication user={user} auth={auth} />
      </TopAppBar>
      <Box p={1}>
        {mainPanel()}
      </Box>
      <BottomAppNav />
    </Container>

    <CompletedBackdrop backdropOpen={backdropOpen} setBackdropOpen={setBackdropOpen} />
  </>);

}

export default App;
