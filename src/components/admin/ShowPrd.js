import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { axiosAuth, axiosInstance } from "../../utills/axios";
import ListBtn from './ListBtnSPrd'
import NavAdmin from '../../parts/admin/NavAdmin';
import Alerts from '../../parts/admin/Alert';

function createData(code, name, category, price, count, action) {
  return { code, name, category, price, count, action };
}



export default function BasicTable() {
  const [product, setProduct] = React.useState([])
  const prdAciton = JSON.parse(localStorage.getItem('actionPrd'))
  const [action, setAction] = React.useState(false)
  const deletePrd = (id)=>{
    let conf = window.confirm('You really want to delete')
    conf && axiosAuth.delete(`http://localhost:8000/api/product/${id}`)
    .catch(error => console.log(error))
    .then(res=>{
      res['data'].msg == 1 && setAction(!action)
    })
  }
  console.log('action', action)

  const editPrd = (id)=>{

  }
  const topUpPrd = (id)=>{
    axiosAuth.get(`http://localhost:8000/api/product-istop-up/${id}`)
    .catch(error => console.log(error))
    .then(res=>{
      res['data'].msg == 1 && setAction(!action)
    })
  }
  const topDownPrd = (id)=>{
    axiosAuth.get(`http://localhost:8000/api/product-istop-down/${id}`)
    .catch(error => console.log(error))
    .then(res=>{
      res['data'].msg == 1 && setAction(!action)
    })
  }
  React.useEffect(()=>{
    axiosInstance.get("http://localhost:8000/api/product")
    .catch(error => console.log(error))
    .then(res=>{
      setProduct(res['data'])
    })
  }, [action])
  const rows = [];
  product.map((data)=>{
    rows.push(createData(data.id,data.name,  data.ctgr_name, data.price, data.count, <ListBtn deletePrd={deletePrd} topUpPrd={topUpPrd} topDownPrd={topDownPrd} del={data.id} edit={data.id} top={data.is_top} />))
  })
  return (
    
    <React.Fragment>
      {/* {prdAciton.status == 1 && <Alerts alert={prdAciton.action} title="deleted" />} */}
      <NavAdmin title="Product" />
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
    </React.Fragment>
  );
}
