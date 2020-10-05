import { Grid, Checkbox, Typography, Paper } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React, { useState } from "react";

interface Props {
  todo: Todo;
  setTodoState: SetTodoState;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    coins: {
      marginLeft: "auto",
      padding: 4,
    },
    doneTask: {
      backgroundColor: theme.palette.grey[400],
      "& #todoText": {
        textDecoration: "line-through",
      },
    },
  })
);

export const TodoListItem: React.FC<Props> = ({ todo, setTodoState }) => {
  const classes = useStyles();
  const [noWrap, setNoWrap] = useState(true);
  const complete = todo.completedAt ? true : false;
  const completedClass: string = complete ? classes.doneTask : "";

  return (
    <Grid
      className={`${completedClass}`}
      container
      item
      zeroMinWidth
      xs={12}
      component={Paper}
      alignItems="center"
      square
    >
      <Grid item>
        <Checkbox
          checked={complete}
          color="primary"
          onChange={() => setTodoState(todo.id, !complete)}
        />
      </Grid>
      <Grid item zeroMinWidth xs onClick={() => setNoWrap(!noWrap)}>
        <Typography
          id="todoText"
          className={noWrap ? "MuiTypography-noWrap" : ""}
        >
          {todo.text}
        </Typography>
      </Grid>
      <Grid item className={classes.coins}>
        <Typography align="right" color="secondary">
          ${todo.coins}
        </Typography>
      </Grid>
    </Grid>
  );
};
