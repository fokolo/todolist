import { IconButton, Grid, Paper, TextField, InputAdornment } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import AddBoxIcon from '@material-ui/icons/AddBox';

interface Props {
    addTodo: AddTodo;
}
const useStyles = makeStyles(() => ({
    root: {
        marginTop: 4,
    },
    cash: {
        marginLeft: 'auto',
        paddingRight: 2,
        width: '4em',
    },
    textBoxContainer: {
        paddingRight: 10,
    },
    textBox: {
        width: '100%',
    },
    addBox: {
        padding: 9
    }
}));

const FormPaper = (props: any) => {
    return (<Paper component={"form"} {...props} />)
};

export const TodoListItemAdder: React.FC<Props> = ({ addTodo }) => {
    const classes = useStyles();
    const [todoText, setTodoText] = useState('');
    const [todoCashText, setTodoCashText] = useState('');

    const handleFromSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const todoCash: number = +todoCashText;
        addTodo(todoText, false, todoCash);
        setTodoText('');
        setTodoCashText('');
    }

    const handleChangeTodoText = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodoText(event.target.value);
    };

    const handleChangeTodoCash = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodoCashText(event.target.value);
    };

    return (
        <Grid container item xs={12} component={FormPaper} onSubmit={handleFromSubmit} alignItems="center" square className={classes.root}>
            <Grid item>
                <IconButton type="submit" className={classes.addBox}>
                    <AddBoxIcon />
                </IconButton>
            </Grid>
            <Grid item xs className={classes.textBoxContainer} >
                <TextField multiline rowsMax={4} className={classes.textBox} id="standard-basic" value={todoText} onChange={handleChangeTodoText} />
            </Grid>
            <Grid item className={classes.cash}>
                <TextField id="standard-number" type="number" InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }} value={todoCashText} onChange={handleChangeTodoCash} />
            </Grid>
        </Grid >
    );
}