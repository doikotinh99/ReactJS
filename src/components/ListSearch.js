import React from "react";
import { useParams, Link } from 'react-router-dom'
import { axiosAuth, axiosInstance } from "../utills/axios";
import ActionAreaCard from '../components/Card'
import Box from '@mui/material/Box';
import Item from '../components/Item'
import { Container } from "@mui/material";
function ListSearch(){
    const params = useParams()
    const [dataProducts, setDataProducts] = React.useState([])
    React.useLayoutEffect(()=>{
        axiosInstance.get(`http://localhost:8000/api/search/${params.key}/0`)
        .then(res => {
            setDataProducts(res['data'].product)
        })
    }, [params]);
    return (
        <React.Fragment>
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
                        id={prd.id}
                        />
                    </Item>
                }

                    
                )}
            </Box>
        </Container>
            
        </React.Fragment>
    )
}

export default ListSearch