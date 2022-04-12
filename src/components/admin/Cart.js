import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ModelCart from './ModalCart';
import NavAdmin from '../../parts/admin/NavAdmin';
import axios from 'axios'
function createData(name, email, action) {
  return { name, email, action };
}

export default function Category() {
  const [cart, setCart] = React.useState([]);
  React.useEffect(()=>{
    axios.get('http://localhost:8000/api/cart')
    .catch(err => console.log(err))
    .then(res=>{
      setCart(res['data'])
    })
  }, [])
  const rows = [];
  cart.map((value)=>{
    console.log('value', value)
    let data = createData(value.name, value.email, <ModelCart data={value.carts} />)
    rows.push(data)
  })
  // console.log(cart)
  return (
    <React.Fragment>
        <NavAdmin title="Cart" />
        <TableContainer sx={{mt: '60px'}} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Action</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row, index) => {
              console.log(row)
              return (
                <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row" align="center">
                    {row.email}
                </TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.action}</TableCell>
                </TableRow>
            )
            })}
            </TableBody>
        </Table>
        </TableContainer>
    </React.Fragment>
  );
}
