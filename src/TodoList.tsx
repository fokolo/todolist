import React, { useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { TodoListItem } from './TodoListItem';
import { TodoListItemAdder } from './TodoListItemAdder';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebase from 'firebase/app';
import 'firebase/firestore';


interface Props {
  user: firebase.User,
  firestore: firebase.firestore.Firestore,
  setTotalCoins: SetTotalCoins,
  completedTask: () => void,
}

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));


export const TodoList: React.FC<Props> = ({ user, firestore, setTotalCoins, completedTask }) => {
  const classes = useStyles();
  const todosRef = firestore.collection(`/users/${user.uid}/todos`);
  const selfTodosQuery = todosRef.orderBy('completedAt').orderBy('createdAt')
  const [todos, , collectionError] = useCollectionData<Todo>(selfTodosQuery, { idField: 'id' });

  useEffect(() => {
    setTotalCoins(calculateTotalCoins(todos ? todos : []));
  });

  if (typeof todos == "undefined" || collectionError || typeof user == "undefined") {
    console.log(collectionError)
    return (<>
      <Typography variant="h5" >Error authenticating: </Typography>
      <Typography variant="body1" >{collectionError ? collectionError.name + ": " + collectionError.message : "Internal Error"}</Typography>
    </>);
  }

  const setTodoState: SetTodoState = async (id: string, toComplete: boolean) => {
    const todoDocumentRef = todosRef.doc(id)
    if (toComplete) {
      todoDocumentRef.update({
        'completedAt': firebase.firestore.FieldValue.serverTimestamp()
      })
      completedTask()
    }
    else {
      todoDocumentRef.update({
        'completedAt': null
      })
    }
  }

  const addTodo: AddTodo = (text: string, coins: number) => {
    if (text === '') { return }
    todosRef.add({
      'text': text,
      'coins': coins,
      'createdAt': firebase.firestore.FieldValue.serverTimestamp(),
      'completedAt': null
    })
  }

  function calculateTotalCoins(todos: Todo[]): number {
    return todos.filter(item => item.completedAt ? true : false)
      .reduce((sum: number, currentElement: Todo) => {
        return sum + currentElement.coins;
      }, 0);
  }

  return (<>
    <div className={classes.root} >
      <Grid container >
        {todos.map(todoItem => (
          <TodoListItem key={todoItem.id} todo={todoItem} setTodoState={setTodoState} />
        ))}
        <TodoListItemAdder key="TodoListItemAdder_key" addTodo={addTodo} />
      </Grid>
    </div>

  </>);
}