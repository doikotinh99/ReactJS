import React from "react"
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
import InputUnstyled, { InputUnstyledProps } from '@mui/base/InputUnstyled';
import { styled } from '@mui/system';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
//components
import Item from '../components/Item'
import NavBar from "./NavBar";
// scss
import '../assets/scss/app.scss'

function Header(){
      const grey = {
        50: '#F3F6F9',
        100: '#E7EBF0',
        200: '#E0E3E7',
        300: '#CDD2D7',
        400: '#B2BAC2',
        500: '#A0AAB4',
        600: '#6F7E8C',
        700: '#3E5060',
        800: '#2D3843',
        900: '#1A2027',
      };
      
      const StyledInputElement = styled('input')(
        ({ theme }) => `
        width: -webkit-fill-available;
        font-size: 0.875rem;
        font-family: IBM Plex Sans, sans-serif;
        font-weight: 400;
        line-height: 1.5;
        color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
        background: #ccc;
        border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
        border-radius: 22px;
        padding: 12px 22px;
      
        &:focus {
          outline: 3px solid #fff0;
        }
      `,
      );
      
      const CustomInput = React.forwardRef(function CustomInput(
        props: InputUnstyledProps,
        ref: React.ForwardedRef<HTMLDivElement>,
      ) {
        return (
          <InputUnstyled components={{ Input: StyledInputElement }} {...props} ref={ref} />
        );
      });

    return (
        <React.Fragment>
            <Grid className="TopHeader" container spacing={2} sx={{
                    m:0,
                    pt:'15px',
                    pb:'15px',
                    textAlign:{
                        lg:"left",
                        md:'left',
                        sm:'center',
                        xs:'center'
                    },
                    width:'100% !important'
                }}>
                <Container sx={{
                    maxWidth:{
                        lg:"1240px",
                        md:'960px',
                        sm:'100%',
                        xs:'100%'
                    },
                    px:{
                        lg:"0px !important",
                        md:'0px !important',
                        sm:'15px !important',
                        xs:'15px !important'
                    }
                }}>
                    <Box
                    sx={{
                        p: 0,
                        display: 'grid',
                        gridTemplateColumns: { 
                            md: '2fr 6fr 4fr',
                        },
                        gap: 0,
                        width:'100%'
                    }}>
                        <Item sx={{pl:'0 !important', alignSelf: 'center'}}>
                            <Link to="/" className="logo">RVM SeaMaf</Link>
                        </Item>
                        <Item><CustomInput aria-label="Demo input" placeholder="Search on RVM SeaMaf ...." /></Item>
                        <Item sx={{display:'flex', alignSelf: 'center', marginLeft:'auto', pr: '0 !important'}}>
                            <FormControl sx={{ m: 'auto 0', minWidth: 80, p: 0}}>
                                <NativeSelect
                                className="sltHeader"
                                defaultValue={30}
                                inputProps={{
                                    name: 'age',
                                    id: 'uncontrolled-native',
                                }}
                                >
                                <option value={1}>U.S Dollar</option>
                                <option value={2}>RTGS Dollar</option>
                                <option value={3}>SA Rand</option>
                                <option value={4}>British Pound</option>
                                </NativeSelect>
                            </FormControl>
                            <Box sx={{px: '15px', m: 'auto 0px'}}>
                                <Link to='/wl' style={{display: 'flex'}}><FavoriteBorderIcon sx={{fontSize: '26px'}} /><span>Wishlist</span></Link>
                            </Box>
                            <Box sx={{pl: '15px', pr: '0!important', m: 'auto 0px'}}>
                                <Link to='sc' style={{display: 'flex'}}>
                                <Stack spacing={2} direction="row">
                                    <Badge badgeContent={4} color="error">
                                        <LocalMallOutlinedIcon  sx={{fontSize: '26px'}} color="action" />
                                    </Badge>
                                </Stack>
                                    <span>Shopping Cart</span>
                                </Link>
                            </Box>
                            
                        </Item>
                    </Box>
                </Container>
            </Grid>
            <NavBar />
        </React.Fragment>
    );
}
export default Header