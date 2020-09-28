import { TableRow, TableCell, Checkbox, Typography } from '@material-ui/core';
import React from 'react';

interface Props {
    todo: Todo;
}

const costStyle = {
    maxWidth: '80px',
    padding: '0 10px 0 0'
}

export const TodoListItem: React.FC<Props> = ({ todo }) => {
    return (<>
        <TableRow style={{
            whiteSpace: 'normal',
            wordWrap: 'break-word'
        }}>
            <TableCell padding="checkbox">
                <Checkbox checked={todo.complete} />
            </TableCell>
            <TableCell >
                <Typography noWrap>
                    {todo.text}
                </Typography>
            </TableCell>
            <TableCell align={'right'} style={costStyle}>
                <Typography >${todo.cash}</Typography>
            </TableCell>
        </TableRow>

    </>);
}