import React from "react"
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Link, useLocation, useNavigate } from "react-router-dom";


import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';

//components
import Item from '../components/Item'
import NavBar from "./NavBar";
import App from '../App'
// scss
import '../assets/scss/app.scss'
import { axiosAuth, axiosInstance } from "../utills/axios";
import BoxSearch from "../components/BoxSearch";
function Header(){
    const navigate = useNavigate();
    const [countcart, setCountcart] = React.useState(0)
    const [action, setAction] = React.useState(false)
    const user = JSON.parse(window.localStorage.getItem('user'))
    const user_id = user ? user.id : false
    const token = window.localStorage.getItem('token');
    const localhost = useLocation()
    React.useEffect(()=>{
        if(user_id){
            axiosAuth.get('http://localhost:8000/api/cart-user')
            .catch((error)=>console.log(error))
            .then((response) => setCountcart(response['data'].length))
        }
    }, [action, localhost])
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
                        <Item sx={{position: 'relative'}}>
                            <BoxSearch />
                        </Item>
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
                                <Link to='/cart-user' style={{display: 'flex'}}>
                                <Stack spacing={2} direction="row">
                                    <Badge id="badge_header" badgeContent={countcart} color="error">
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