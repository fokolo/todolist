import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { TodoListItem } from './TodoListItem';


interface Props {
  todos: Todo[];
}

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1
  },
}));


export const TodoList: React.FC<Props> = ({ todos }) => {
  const classes = useStyles();

  return (<>
    <div className={classes.root}>
      <Grid container>
        {todos.map(todoItem => (
          <TodoListItem todo={todoItem} />
        ))}
      </Grid>
    </div>

  </>);
}