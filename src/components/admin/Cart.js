import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ModelCart from './ModalCart';

function createData(code, name, email, gross, total, action) {
  return { code, name, email, gross, total, action };
}

const rows = [
  createData(159,'Frozen yoghurt', 'admin@gmail.com', 12, 120, <ModelCart id={1} />),
  createData(159,'Frozen yoghurt', 'admin@gmail.com', 12, 120, <ModelCart id={2} />),
  createData(159,'Frozen yoghurt', 'admin@gmail.com', 12, 120, <ModelCart id={3} />),
  
];

export default function Category() {
  return (
    <React.Fragment>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell align="center">Code</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">gross product</TableCell>
                <TableCell align="center">total money</TableCell>
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
                <TableCell align="center">{row.gross}</TableCell>
                <TableCell align="center">{row.total}</TableCell>
                <TableCell align="center">{row.action}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    </React.Fragment>
  );
}
