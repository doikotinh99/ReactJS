import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Button } from '@mui/material';
export default function Quanlty() {
    const [qltCount, setQltCount] = React.useState(0)
  return (
    <React.Fragment>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <RemoveIcon onClick={()=>setQltCount(prev => Number(prev - 1) >= 0 ? Number(prev - 1) : 0)} sx={{ color: 'action.active', mr: 1, my: 0.5, cursor: 'pointer' }} />
            <TextField type="number" onChange={(e)=> setQltCount(Number(e.target.value))} sx={{'input':{textAlign: 'center', maxWidth: '100px'}}} id="quanlityPrdDt" label="Quanlity" value={qltCount} variant="standard" />
            <AddIcon onClick={()=> setQltCount(prev => prev + 1)} sx={{ color: 'action.active', mr: 1, my: 0.5, cursor: 'pointer' }} />
        </Box>
        <Button sx={{mt: '40px', p: '15px 30px', background: '#f51167'}} color="error" variant='contained'>ADD TO CART</Button>
    </React.Fragment>
  );
}
