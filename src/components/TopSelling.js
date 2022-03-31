import { Container } from "@mui/material";
import React from "react";
import Box from '@mui/material/Box';
import axios from 'axios'

import Item from '../components/Item'
import ActionAreaCard from '../components/Card'
function TopSelling(){
    const [dataProducts, setDataProducts] = React.useState([])
    React.useLayoutEffect(()=>{
        axios.get('http://localhost:8000/api/product/hot')
        .then((response) => response)
        .then(function (data) {
            setDataProducts(data.data)
        });
    }, []);
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
            },
            mt: '15px'
        }}>
            <h2 style={{fontSize:"1.5rem", textAlign: 'center', marginBottom: '15px'}}>BROWSE TOP SELLING PRODUCTS</h2>
            <Box
            sx={{
                p: 0,
                display: 'grid',
                gridTemplateColumns: { 
                    lg: '1fr 1fr 1fr 1fr',
                    md: '1fr 1fr 1fr',
                    sm: '1fr 1fr',
                    xs: '1fr'
                },
                gap: 0,
                width:'100%'
            }}
            >
                {dataProducts.map((prd)=>{
                    return <Item sx={{px:"3px"}} key={prd.id}>
                        <ActionAreaCard 
                        name={prd.name} 
                        image={'http://localhost:8000/' + prd.images} 
                        price={prd.price} 
                        news={prd.new} 
                        hots={1}
                        slug={prd.slug}
                        />
                    </Item>
                }

                    
                )}
            </Box>
        </Container>
    )

}

export default TopSelling