import React from 'react';
import { TableContainer, Paper, Table, TableBody } from '@material-ui/core';
import { TodoListItem } from './TodoListItem';


interface Props {
    todos: Todo[];
}

export const TodoList: React.FC<Props> = ({ todos }) => {
    return (<>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
              {todos.map(todoItem => (
                  <TodoListItem todo={todoItem}/>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

    </>);
}