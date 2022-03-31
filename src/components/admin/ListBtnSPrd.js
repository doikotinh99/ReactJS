import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ListBtnSPrd({del, edit, top}) {
  return (
    <Stack spacing={2} direction="row" sx={{width: 'fit-content', margin: '0px auto'}}>
      {del && (<Button variant="contained" color='error'>Delete</Button>)}
      {edit && (<Button variant="contained" color='warning'>Edit</Button>)}
      {top && (<Button variant="contained">Top up</Button>)}
    </Stack>
  );
}