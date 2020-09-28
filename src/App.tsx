import React, { useState } from 'react';
import { Backdrop, Checkbox, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@material-ui/core';
import { CheckCircle } from '@material-ui/icons';
import { green } from '@material-ui/core/colors';

function App() {
  const [isSelected, setIsSelected] = useState(false);
  const [backdropOpen, setBackdropOpen] = useState(true);


  return (
    <>
      <Backdrop open={backdropOpen} onClick={() => { setBackdropOpen(false) }}>
        <CheckCircle style={{ color: green[500], fontSize: 40 }} />
      </Backdrop>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            <TableRow selected={isSelected} hover onClick={() => {
              setIsSelected(!isSelected);
            }}>
              <TableCell padding="checkbox">
                <Checkbox checked={isSelected} onChange={(e) => {
                  setIsSelected(e.target.checked);
                }} />
              </TableCell>
              <TableCell>
                Task A
            </TableCell>
            </TableRow>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell>
                Task B
            </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>);
}

export default App;
