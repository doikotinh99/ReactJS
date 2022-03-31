import { Box } from "@mui/system";
import React, { useState } from "react";
import { Container } from "@mui/material";

// component
import Features from '../components/Features'
import LatestProduct from '../components/LatestProduct'
import Item from '../components/Item'
import Banner from '../components/Banner'
import TopSelling from '../components/TopSelling'
import Carousel from '../parts/Carousel_index'

function Home(){
    document.title = "RVM SeaMaf | Online & physical bead shop with the best beads and beading supplies in Zimbabwe ✓ Over 9000 beads for jewelry making ✓ Glass beads ✓ Beading supplies and much more!"
    return (
        <React.Fragment>
            <Carousel />
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
                    <Banner title="title" disc="mô tả mô tả mô tả" path="upload/images/banner1.webp" color="error" name="SALE" />
                    </Item>
                    <Item sx={{pr:'0 !important'}}>
                        <Banner title="title" disc="mô tả mô tả mô tả" path="upload/images/banner2.webp" color="success" name="NEW" />
                    </Item>
                </Box>
            </Container>
            <TopSelling />
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
                            md: '1fr',
                        },
                        gap: 0,
                        width:'100%'
                    }}>
                    <Item sx={{pl:'0 !important'}}>
                    <Banner title="title" disc="mô tả mô tả mô tả" path="upload/images/banner1.webp" color="success" name="NEW" />
                    </Item>
                </Box>
            </Container>
        </React.Fragment>
    )
}

export default Home