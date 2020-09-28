import { TableRow, TableCell, Checkbox, Typography } from '@material-ui/core';
import React from 'react';

interface Props {
    todo: Todo;
}

export const TodoListItem: React.FC<Props> = ({ todo }) => {
    return (<>
        <TableRow>
            <TableCell padding="checkbox">
                <Checkbox checked={todo.complete} />
            </TableCell>
            <TableCell>
                <Typography>
                    {todo.text}
                </Typography>
            </TableCell>
            <TableCell align={'right'} >
                <Typography >${todo.cash}</Typography>
            </TableCell>
        </TableRow>

    </>);
}