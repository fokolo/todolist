import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { TodoListItem } from './TodoListItem';
import { TodoListItemAdder } from './TodoListItemAdder';


interface Props {
  todos: Todo[];
  toggleTodo: ToggleTodo;
  addTodo: AddTodo;
}

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));


export const TodoList: React.FC<Props> = ({ todos, toggleTodo, addTodo }) => {
  const classes = useStyles();

  return (<>
    <div className={classes.root} >
      <Grid container>
        {todos.map(todoItem => (
          <TodoListItem key={todoItem.id} todo={todoItem} toggleTodo={toggleTodo} />
        ))}
        <TodoListItemAdder key="TodoListItemAdder_key" addTodo={addTodo} />
      </Grid>
    </div>

  </>);
}