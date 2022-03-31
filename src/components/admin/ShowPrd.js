import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import ListBtn from './ListBtnSPrd'
function createData(code, name, category, price, count, action) {
  return { code, name, category, price, count, action };
}

const rows = [
  createData(159,'Frozen yoghurt',  6.0, 24, 4.0, <ListBtn del edit top />),
  createData(159,'Frozen yoghurt',  6.0, 24, 4.0, <ListBtn del edit top />),
  createData(159,'Frozen yoghurt',  6.0, 24, 4.0, <ListBtn del edit top />),
  createData(159,'Frozen yoghurt',  6.0, 24, 4.0, <ListBtn del edit top />),
  createData(159,'Frozen yoghurt',  6.0, 24, 4.0, <ListBtn del edit top />),
  createData(159,'Frozen yoghurt',  6.0, 24, 4.0, <ListBtn del edit top />),
  createData(159,'Frozen yoghurt',  6.0, 24, 4.0, <ListBtn del edit top />),
  createData(159,'Frozen yoghurt',  6.0, 24, 4.0, <ListBtn del edit top />),
  createData(159,'Frozen yoghurt',  6.0, 24, 4.0, <ListBtn del edit top />),
  createData(159,'Frozen yoghurt',  6.0, 24, 4.0, <ListBtn del edit top />),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Code</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Category</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Count</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {row.code}
              </TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.category}</TableCell>
              <TableCell align="center">{row.price}</TableCell>
              <TableCell align="center">{row.count}</TableCell>
              <TableCell align="center">{row.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
