import { Box } from "@mui/system";
import React from "react";


// component
import Features from '../components/Features'
import LatestProduct from '../components/LatestProduct'
import Item from '../components/Item'
import Banner from '../components/Banner'
import { Container } from "@mui/material";
function Home(){
    document.title = "home"
    return (
        <React.Fragment>
            <Features />
            <LatestProduct />
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
                <Box sx={{
                        p: 0,
                        display: 'grid',
                        gridTemplateColumns: { 
                            md: '1fr 1fr',
                        },
                        gap: 0,
                        width:'100%'
                    }}>
                    <Item sx={{pl:'0 !important'}}>
                    <Banner title="title" disc="mô tả mô tả mô tả" color="error" />
                    </Item>
                    <Item sx={{pr:'0 !important'}}>
                        <Banner title="title" disc="mô tả mô tả mô tả" color="error" />
                    </Item>
                </Box>
            </Container>
        </React.Fragment>
    )
}

export default Home