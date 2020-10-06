import React, { useState } from "react";
import { TodoList } from "./todo/TodoList";
import { CompletedBackdrop } from "./common/CompletedBackdrop";
import { TopAppBar } from "./appbars/TopAppBar";
import { BottomAppNav } from "./appbars/BottomAppNav";
import { Box, Grid, Container, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";
import { useAuthState } from "react-firebase-hooks/auth";
import { Authentication } from "./common/Authentication";
import { Store } from "./store/Store";

firebase.initializeApp({
  apiKey: "AIzaSyCnjOQfm5TzEZjHZ0LedcsEet0Sqjl0-7M",
  authDomain: "gamified-todo-app.firebaseapp.com",
  databaseURL: "https://gamified-todo-app.firebaseio.com",
  projectId: "gamified-todo-app",
  storageBucket: "gamified-todo-app.appspot.com",
  messagingSenderId: "977360156689",
  appId: "1:977360156689:web:0a2162a2d5f023f39b19b0",
  measurementId: "G-B9S1LMLB1F",
});
firebase
  .firestore()
  .enablePersistence()
  .catch(function (err) {
    if (err.code === "failed-precondition") {
      console.log(
        `Failed to enable firestore offline persistence, due to ${err}`
      );
    } else if (err.code === "unimplemented") {
      console.log(
        `Failed to enable firestore offline persistence. Browser does not support firestore offline ${err}`
      );
    }
  });

const auth = firebase.auth();
const firestore = firebase.firestore();

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    padding: 0,
  },
  lastItem: {
    marginTop: "auto",
  },
  signin: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function App() {
  const [backdropOpen, setBackdropOpen] = useState(false);
  const [user, , authError] = useAuthState(auth);
  const classes = useStyles();
  const [coins, setTotalCoins] = useState(0);
  const [currentLocation, setCurrentLocation] = useState(0);
  let currentPanel: voidFunc;

  if (authError) {
    console.log(authError);
  }

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  const todosPanel = () => {
    if (user) {
      return (
        <Box p={1}>
          <TodoList
            user={user}
            firestore={firestore}
            setTotalCoins={setTotalCoins}
            completedTask={completedTask}
          />
        </Box>
      );
    }
  };

  const loginPanel = () => {
    return (
      <Grid container justify="center" alignItems="center" item xs={12}>
        <Button
          variant="contained"
          color="primary"
          className={classes.signin}
          onClick={signInWithGoogle}
        >
          Sign In
        </Button>
      </Grid>
    );
  };

  const storePanel = () => {
    return <Store />;
  };

  const settingsPanel = () => {
    return <div>Settings</div>;
  };

  const completedTask = () => {
    setBackdropOpen(true);
    setTimeout(() => {
      setBackdropOpen(false);
    }, 300);
  };

  if (user) {
    switch (currentLocation) {
      case 0:
        currentPanel = todosPanel;
        break;
      case 1:
        currentPanel = storePanel;
        break;
      default:
        currentPanel = settingsPanel;
        break;
    }
  } else {
    currentPanel = loginPanel;
  }

  return (
    <div style={{ flexGrow: 1 }}>
      <Container className={classes.root}>
        <TopAppBar coins={coins}>
          <Authentication
            user={user}
            auth={auth}
            signInWithGoogle={signInWithGoogle}
          />
        </TopAppBar>
        {currentPanel()}
        <BottomAppNav
          currentLocation={currentLocation}
          setCurrentLocation={setCurrentLocation}
        />
      </Container>

      <CompletedBackdrop
        backdropOpen={backdropOpen}
        setBackdropOpen={setBackdropOpen}
      />
      <CompletedBackdrop
        backdropOpen={backdropOpen}
        setBackdropOpen={setBackdropOpen}
      />
    </div>
  );
}

export default App;
