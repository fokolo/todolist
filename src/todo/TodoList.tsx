import React, { useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TodoListItem } from "./TodoListItem";
import { TodoListItemAdder } from "./TodoListItemAdder";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Skeleton } from "@material-ui/lab";
import firebase from "firebase/app";
import "firebase/firestore";

interface Props {
  user: firebase.User;
  firestore: firebase.firestore.Firestore;
  setTotalCoins: SetTotalCoins;
  completedTask: () => void;
}

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

export const TodoList: React.FC<Props> = ({
  user,
  firestore,
  setTotalCoins,
  completedTask,
}) => {
  const classes = useStyles();
  const todosCollectionRef = firestore.collection(`/users/${user.uid}/todos`);
  const selfTodosQuery = todosCollectionRef
    .orderBy("completedAt")
    .orderBy("createdAt");
  const [todos, , collectionError] = useCollectionData<Todo>(selfTodosQuery, {
    idField: "id",
  });

  useEffect(() => {
    setTotalCoins(calculateTotalCoins(todos ? todos : []));
  });

  if (collectionError) {
    console.log(collectionError);
    return (
      <>
        <Typography variant="h5">Error authenticating: </Typography>
        <Typography variant="body1">
          {collectionError
            ? collectionError.name + ": " + collectionError.message
            : "Internal Error"}
        </Typography>
      </>
    );
  }

  const setTodoState: SetTodoState = async (
    id: string,
    toComplete: boolean
  ) => {
    const todoDocumentRef = todosCollectionRef.doc(id);
    if (toComplete) {
      todoDocumentRef.update({
        completedAt: firebase.firestore.Timestamp.now(),
      });
      console.log(todos);
      completedTask();
    } else {
      todoDocumentRef.update({
        completedAt: null,
      });
    }
  };

  const addTodo: AddTodo = (text: string, coins: number) => {
    if (text === "") {
      return;
    }
    todosCollectionRef.add({
      text: text,
      coins: coins,
      createdAt: firebase.firestore.Timestamp.now(),
      completedAt: null,
    });
  };

  function calculateTotalCoins(todos: Todo[]): number {
    return todos
      .filter((item) => (item.completedAt ? true : false))
      .reduce((sum: number, currentElement: Todo) => {
        return sum + currentElement.coins;
      }, 0);
  }

  return (
    <>
      <div className={classes.root}>
        <Grid container>
          {todos ? (
            todos.map((todoItem) => (
              <TodoListItem
                key={todoItem.id}
                todo={todoItem}
                setTodoState={setTodoState}
              />
            ))
          ) : (
            <>
              <Grid
                item
                component={Skeleton}
                variant="rect"
                height={42}
                xs={12}
              />
            </>
          )}
          <TodoListItemAdder key="TodoListItemAdder_key" addTodo={addTodo} />
        </Grid>
      </div>
    </>
  );
};
