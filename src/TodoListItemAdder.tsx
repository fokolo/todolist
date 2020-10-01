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
    coins: {
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
    const [todoCoinsText, setTodoCoinsText] = useState('');

    const handleFromSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const todoCoins: number = +todoCoinsText;
        addTodo(todoText, false, todoCoins);
        setTodoText('');
        setTodoCoinsText('');
    }

    const handleChangeTodoText = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodoText(event.target.value);
    };

    const handleChangeTodoCoins = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodoCoinsText(event.target.value);
    };

    return (
        <Grid container item xs={12} component={FormPaper} onSubmit={handleFromSubmit} alignItems="center" square className={classes.root}>
            <Grid item>
                <IconButton type="submit" className={classes.addBox}>
                    <AddBoxIcon />
                </IconButton>
            </Grid>
            <Grid item xs className={classes.textBoxContainer} >
                <TextField required multiline rowsMax={2} className={classes.textBox} id="standard-basic" value={todoText} onChange={handleChangeTodoText} />
            </Grid>
            <Grid item className={classes.coins}>
                <TextField id="standard-number" type="number" InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }} value={todoCoinsText} onChange={handleChangeTodoCoins} />
            </Grid>
        </Grid >
    );
}