import { Grid, Checkbox, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

interface Props {
    todo: Todo;
}
const useStyles = makeStyles(() => ({
    paper: {
        borderRadius: 0,
        // padding: 5
    }
}));



export const TodoListItem: React.FC<Props> = ({ todo }) => {
    const classes = useStyles();
    return (
        <Grid container item zeroMinWidth xs={12} className={classes.paper} component={Paper} alignItems="center">
            <Grid item>
                <Checkbox checked={todo.complete} />
            </Grid>
            <Grid item zeroMinWidth xs>
                <Typography noWrap>
                    {todo.text}
                </Typography>
            </Grid>
            <Grid item style={{ marginLeft: 'auto', padding: 4 }}>
                <Typography align="right" color="secondary">${todo.cash}</Typography>
            </Grid>
        </Grid>
    );
}