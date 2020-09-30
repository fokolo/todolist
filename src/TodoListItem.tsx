import { Grid, Checkbox, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

interface Props {
    todo: Todo;
    toggleTodo: ToggleTodo;
}
const useStyles = makeStyles(() => ({
    cash: {
        marginLeft: 'auto',
        padding: 4
    }
}));



export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
    const classes = useStyles();


    return (
        <Grid container item zeroMinWidth xs={12} component={Paper} alignItems="center" square>
            <Grid item>
                <Checkbox checked={todo.complete} onChange={(e) => toggleTodo(todo.id)} />
            </Grid>
            <Grid item zeroMinWidth xs>
                <Typography noWrap>
                    {todo.text}
                </Typography>
            </Grid>
            <Grid item className={classes.cash} >
                <Typography align="right" color="secondary">${todo.cash}</Typography>
            </Grid>
        </Grid>
    );
}