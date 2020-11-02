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
import { Redirect, Route } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";
import { Authentication } from "./common/UserAvatar";
import { Store } from "./store/Store";
import { IonApp } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { LoginPage } from "./pages/LoginPage";
import { TabsContainer } from "./pages/TabsContainer";

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
  const [user, , authError] = useAuthState(auth);
  const classes = useStyles();

  if (authError) {
    console.log(authError);
  }

  const getFirebaseConnection: GetFirebaseConnection = () => {
    if (user) {
      return {
        user: user,
        firestore: firestore,
      };
    }
    throw new Error("Error Authenticating");
  };

  return (
    <IonApp>
      {user ? (
        <TabsContainer getFirebaseConnection={getFirebaseConnection} />
      ) : (
        <LoginPage />
      )}
    </IonApp>
    //   <Container className={classes.root}>
    //     <TopAppBar coins={coins}>
    //       <Authentication user={user} auth={auth} />
    //     </TopAppBar>
    //     {currentPanel()}
    //     <BottomAppNav
    //       currentLocation={currentLocation}
    //       setCurrentLocation={setCurrentLocation}
    //     />
    //   </Container>

    //   <CompletedBackdrop
    //     backdropOpen={backdropOpen}
    //     setBackdropOpen={setBackdropOpen}
    //   />
    //   <CompletedBackdrop
    //     backdropOpen={backdropOpen}
    //     setBackdropOpen={setBackdropOpen}
    //   />
    // </div>
  );
}

export default App;
