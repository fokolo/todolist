import React, { useEffect } from "react";
import { Typography } from "@material-ui/core";
import { TodoListItem } from "./TodoListItem";
import { TodoListItemAdder } from "./TodoListItemAdder";
import { useCollectionData } from "react-firebase-hooks/firestore";
import firebase from "firebase/app";
import {
  IonItem,
  IonItemDivider,
  IonList,
  IonSkeletonText,
} from "@ionic/react";
import "firebase/firestore";

interface Props {
  user: firebase.User;
  firestore: firebase.firestore.Firestore;
  setTotalCoins: SetTotalCoins;
  completedTask: () => void;
}

export const TodoList: React.FC<Props> = ({
  user,
  firestore,
  setTotalCoins,
  completedTask,
}) => {
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
    let completedAt: firebase.firestore.Timestamp | null;
    if (toComplete) {
      completedTask();
      completedAt = firebase.firestore.Timestamp.now();
    } else {
      completedAt = null;
    }
    setTimeout(() => {
      // A bit of delay for better UI feel
      todoDocumentRef.update({
        completedAt: completedAt,
      });
    }, 500);
  };

  const deleteTodo: DeleteTodo = async (id: string) => {
    todosCollectionRef.doc(id).delete();
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
    <IonList class="ion-no-padding">
      {todos ? (
        todos.map((todoItem) => (
          <TodoListItem
            key={todoItem.id}
            todo={todoItem}
            setTodoState={setTodoState}
            deleteTodo={deleteTodo}
          />
        ))
      ) : (
        <>
          <IonItem>
            <IonSkeletonText
              key="IonSkeletonText1"
              animated
              style={{ height: 42 }}
            />
          </IonItem>
          <IonItem>
            <IonSkeletonText
              key="IonSkeletonText2"
              animated
              style={{ height: 42 }}
            />
          </IonItem>
          <IonItem>
            <IonSkeletonText
              key="IonSkeletonText3"
              animated
              style={{ height: 42 }}
            />
          </IonItem>
        </>
      )}
      <IonItemDivider />
      <TodoListItemAdder addTodo={addTodo} />
    </IonList>
  );
};
