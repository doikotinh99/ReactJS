import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

import ListBtn from './ListBtnSPrd'
function createData(code, name, action) {
  return { code, name, action };
}
const btn = ()=>(
<Stack spacing={2} direction="row" sx={{width: 'fit-content', margin: '0px auto'}}>
  <Button variant="contained" color='error'>Delete</Button>
</Stack>
)
const rows = [
  createData(159,'Frozen yoghurt', <ListBtn del />),
  createData(159,'Frozen yoghurt', <ListBtn del />),
  createData(159,'Frozen yoghurt', <ListBtn del />),
  createData(159,'Frozen yoghurt', <ListBtn del />),
  createData(159,'Frozen yoghurt', <ListBtn del />),
  createData(159,'Frozen yoghurt', <ListBtn del />),
  createData(159,'Frozen yoghurt', <ListBtn del />),
  createData(159,'Frozen yoghurt', <ListBtn del />),
  createData(159,'Frozen yoghurt', <ListBtn del />),
  createData(159,'Frozen yoghurt', <ListBtn del />),
  createData(159,'Frozen yoghurt', <ListBtn del />),
  
];

export default function Category() {
  return (
    <React.Fragment>
        <Button sx={{position: 'absolute', right: '10px', bottom: '50px', zIndex: '2', width: '50px', height: '50px', borderRadius: '50%'}} variant='contained'><AddIcon /></Button>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell align="center">Code</TableCell>
                <TableCell align="center">Name</TableCell>
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
                <TableCell align="center">{row.action}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    </React.Fragment>
  );
}
