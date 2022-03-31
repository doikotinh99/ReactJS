import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Item from '../../components/Item'
import { Button } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
export default function AddProduct() {
  const [name, setName] = React.useState('Cat in the Hat');
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <React.Fragment>
        <h5 style={{marginBottom: '9px', fontSize: '1.25rem'}}>Product information</h5>
        <Box
            component="form"
            noValidate
            autoComplete="off"
            >
            <TextField
                sx={{width: '100%'}}
                id="outlined-name"
                label="Product's name"
            />
            </Box>
            
            <Box
                component="form"
                sx={{
                mt: '15px',
                p: 0,
                    display: 'grid',
                    gridTemplateColumns: { 
                        lg: '1fr 1fr 1fr',
                        md: '1fr 1fr 1fr',
                        sm: '1fr 1fr 1fr',
                        xs: '1fr',
                    },
                    gap: 0,
                    width:'100%',
                }}
                noValidate
                autoComplete="off"
            >
                <Item sx={{pl: '0px !important'}}>
                    <TextField 
                    sx={{width: '90%'}}
                    id="outlined-name"
                    label="Price"
                    />
                </Item>
                
                <Item>
                    <TextField
                    sx={{width: '90%'}}
                    id="outlined-name"
                    label="Amount"
                    />
                </Item>
                <Item sx={{textAlign: 'right', pr: '0px !important'}}>
                    <FormControl sx={{width: '90%'}}>
                        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Category"
                        onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Item>
            </Box>
            <Box sx={{'& > :not(style)': { m: 1, width: '100%',},  textAlign: 'center' }}>
                <Button
                style={{width: '50%', margin: '15px auto'}}
                variant="contained"
                component="label"
                >
                Upload File
                <input
                    type="file"
                    multiple
                    hidden
                />
                </Button>
            </Box>
            <h5 style={{marginBottom: '9px', fontSize: '1.25rem'}}>Example textarea</h5>
            <Box sx={{'& > :not(style)': { },  textAlign: 'center' }}>
                
                <TextareaAutosize
                aria-label="Example textarea"
                minRows={5}
                placeholder="Example textarea"
                style={{ width: '100%', borderRadius: '5px'}}/>
            </Box>
            <Box sx={{width: '100%', textAlign: 'center', my: '20px'}}>
                <Button variant='contained' sx={{p: '15px 50px', fontSize: '1.25rem'}}>Upload</Button>
            </Box>
    </React.Fragment>
  );
}
