import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { axiosAuth, axiosInstance } from "../../utills/axios";
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';

import CardCart from '../../components/CardCart'
import Quanlty from '../../components/Quanlity';
import Item from '../../components/Item'
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
  '& .MuiDialog-paper': {
    maxWidth: '100% !important',
    margin: 0,
    marginTop: '50px'
  }
}));
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
export default function ModelCart({data}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [action, setAction] = React.useState(false)
    React.useEffect(()=>{
        setAction(!action)
    }, [localStorage.getItem('amountPrd')])
    const deleteCart = (id, index)=>{
        axiosInstance.delete('http://localhost:8000/api/cart/' + id)
        .catch((error)=> console.log(error))
        .then((response)=>{
            setAction(!action)
            if(response.data == 1){
                let dom = document.getElementsByClassName('modalListCart')
                dom[index].style.display = 'none'
                alert("Xóa thành công");
            }else{
                alert("Vui lòng thực hiện lại");
            }
        })
    }
    const btn = (id, index)=>{
        return <Button variant="contained" onClick={()=>deleteCart(id, index)} color='error'>Delete</Button>;
    }
    function createData(product, Quatity, Size, Price, action) {
      return { product, Quatity, Size, Price, action };
    }
    const [cart, setCart] = React.useState(data)
    let sumPrice = 0;
    const actionPrice = (e)=>{
        sumPrice += e
        document.getElementById('sumpriceCart').innerText = sumPrice;
    }
    const rows = [];
      cart.map((data, index)=>{
        console.log('map', data)
        sumPrice = sumPrice + data['product'].price*data.quality;
        rows.push(createData( <CardCart key={index} image={"http://localhost:8000/" + data['product'].image} name={data['product'].name} />, <Quanlty value={data.quality} func={actionPrice} price={data['product'].price} btn idCart={data.id} />, 0, data['product'].price, btn(data.id, index)))
      })
    
  return (
    <div>
      <Button variant='contained' onClick={handleOpen}>Detail</Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
      <DialogContent dividers sx={{p: '0px !important'}}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
              <TableRow>
                  <StyledTableCell align='left'>Product</StyledTableCell>
                  <StyledTableCell align="center">Quatity</StyledTableCell>
                  <StyledTableCell align="center">Size</StyledTableCell>
                  <StyledTableCell align="center">Price</StyledTableCell>
                  <StyledTableCell align="center">#</StyledTableCell>
              </TableRow>
              </TableHead>
              <TableBody>
              {rows.map((row, index) => (
                  <StyledTableRow key={index} className="modalListCart">
                      <StyledTableCell align="left">{row.product}</StyledTableCell>
                      <StyledTableCell align="center">{row.Quatity}</StyledTableCell>
                      <StyledTableCell align="center">{row.Size}</StyledTableCell>
                      <StyledTableCell align="center">{row.Price}</StyledTableCell>
                      <StyledTableCell align="center">{row.action}</StyledTableCell>
                  </StyledTableRow>
              ))}
              </TableBody>
              
          </Table>
          
        </TableContainer>
      </DialogContent>
        <DialogActions sx={{p:'0px !important'}}>
          <Box sx={{
              width: '100%',
              background: 'red',
              textAlign: 'right',
              'h2' : {
                  padding: '15px 20px'
              }
          }}>
              <h2>Total $<span id="sumpriceCart">{sumPrice}</span></h2>
          </Box>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
