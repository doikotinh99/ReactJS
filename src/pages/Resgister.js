import React from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import EmailIcon from '@mui/icons-material/Email';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from "react-router-dom";
import { axiosAuth, axiosInstance } from '../utills/axios'
//component
import Item from '../components/Item'
import { Button } from "@mui/material";

function Register(){
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    document.title = "Register"

    const register = ()=>{
        let name = document.getElementById('name-regist').value
        let email = document.getElementById('email-regist').value
        let pass = document.getElementById('pass-regist').value
        let cpass = document.getElementById('conFpass-regist').value
        axiosInstance.post('http://localhost:8000/api/register', {
            name: name,
            email: email,
            password: pass,
            password_confirmation: cpass,
        })
        .catch((error) => {
            let e = JSON.parse(error['request'].response)[0]
            console.log(e)
            if(e['email'][0]){
                alert(e['email'][0])
            }
            if(e['password'][0]){
                alert(e['password'][0])
            }
            return false
        })
        .then((response) => {
            alert(response['data'].msg)
            return window.location.replace("/login");
        })
    }
    return (
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
                    lg: '1fr 1fr',
                    md: '1fr 1fr',
                    sm: '1fr',
                    xs: '1fr',
                },
                gap: 0,
                width:'100%',
                my: '15px',
                border: '1px solid gray',
                borderRadius: "5px"
            }}>
                <Item sx={{p:'0 !important'}}>
                    <img style={{width: '100%', height: '100%'}} src="upload/images/background.jpg" />
                </Item>
                <Item sx={{p:'70px 50px !important'}}>
                    <h2 style={{textAlign:"center", fontSize: '1.5rem', fontWeight: '700'}}>Login to your account</h2>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end', mb:"15px"}}>
                        <PersonIcon sx={{ color: '#f51167', mr: 1, my: 0.5 }} />
                        <TextField type="text" sx={{width: "100%"}} id="name-regist" label="Name" variant="standard" />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end', mb:"15px"}}>
                        <EmailIcon sx={{ color: '#f51167', mr: 1, my: 0.5 }} />
                        <TextField type="email" sx={{width: "100%"}} id="email-regist" label="Email Address" variant="standard" />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end', mb:"15px"}}>
                        <VpnKeyIcon sx={{ color: '#f51167', mr: 1, my: 0.5 }} />
                        <TextField type="password" sx={{width: "100%"}} id="pass-regist" label="Password" variant="standard" />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end', mb:"15px"}}>
                        <VpnKeyIcon sx={{ color: '#f51167', mr: 1, my: 0.5 }} />
                        <TextField type="password" sx={{width: "100%"}} id="conFpass-regist" label="Confirm Password" variant="standard" />
                    </Box>
                    <Button sx={{
                        width: '100%',
                        p: "11px",
                        fontWeight: '700',
                        bgcolor: '#f51167',
                        mb: '15px'
                    }} color="error"
                    onClick={register}
                    variant="contained">Sign-up</Button>
                    <Box sx={{textAlign: 'right', mb: '15px'}}>
                        <a style={{display: "inline-block", color: '#007bff', fontWeight: '700'}} href="/">Forgot Password?</a>
                    </Box>
                    <Box sx={{textAlign: 'center', mb: '15px'}}>
                        <span>or register with</span>
                    </Box>
                    <Box sx={{
                        p: 0,
                        display: 'grid',
                        gridTemplateColumns: { 
                            lg: '1fr 1fr',
                            md: '1fr 1fr',
                            sm: '1fr',
                            xs: '1fr',
                        },
                        gap: 0,
                        width:'100%',
                        mb: '20px'
                    }}>
                        <Button sx={{
                        width: '100%',
                        p: "7px",
                        fontWeight: '700',
                        mr: '15px'
                        }} color="primary" variant="contained" >Facebook</Button>
                        <Button sx={{
                            width: '100%',
                            p: "7px",
                            fontWeight: '700',
                            ml: '15px'
                        }} color="error" variant="contained" >Google</Button>
                    </Box>
                    <hr />
                    <Box sx={{textAlign: 'center', mt: "25px"}}>
                    
                        <p style={{marginBottom:"15px"}}>Already have an account? <Link to="/login" style={{color: '#007bff', fontWeight: 'bold'}}>Login Here</Link></p>
                    </Box>
                </Item>
            </Box>
        </Container>
    )
}

export default Register