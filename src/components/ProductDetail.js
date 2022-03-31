import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Breadcrumb from './Braeadcumb'
import axios from 'axios'
import { Container } from '@mui/material'
import { Box } from '@mui/system'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import Item from './Item'
import Quanlty from './Quanlity'
import Description from './Description'
import SimilarProduct from './SimilarProduct'
function ProductDetail(){
    const params = useParams()
    const [dataProducts, setDataProducts] = React.useState([])
    console.log(dataProducts)
    React.useLayoutEffect(()=>{
        axios.get(`http://localhost:8000/api/product/${params.slug}`)
        .then((response) => response)
        .then(function (data) {
            setDataProducts(data.data)
        });
    }, [params]);
    const breadcr = [{
        name: 'Home',
        path: '/'
    },
    {
        name: 'Product',
        path: '/product'
    },{
        name: dataProducts.name
    }
    ]
    const handleClickImg = (e)=>{
        let srcT = document.getElementById('ImgMainPrdDt').src
        document.getElementById('ImgMainPrdDt').src = e.target.src
        e.target.src = srcT
    }
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
                <Breadcrumb lists={breadcr} />

                <Link to='/product' style={{display: 'flex', alignItems: 'center'}}><KeyboardDoubleArrowLeftIcon /> Back to Categories</Link>
                <Box sx={{
                    mt: '15px',
                    display: 'grid',
                    gridTemplateColumns: { 
                        lg: '4fr 6fr',
                        md: '6fr 7fr',
                        sm: '5fr 5fr',
                        xs: '1fr'
                    },
                    gap: 0,
                    }}>
                    <Item sx={{px: 0}}>
                        <Box sx={{
                            height: '400px'
                        }}>
                            {dataProducts.images 
                            &&
                            (<img id='ImgMainPrdDt' style={{width: '100%', height: '100%'}} src={'http://localhost:8000/' + dataProducts.images[0].path} />)}
                        </Box>
                        <Box sx={{
                            height: '100px',
                            mt: '10px',
                            maxWidth: '100%',
                            overflowX: 'scroll'
                        }}>
                            {dataProducts.images 
                            &&
                            dataProducts.images.map((data, index)=>index !== 0 && (<img onClick={handleClickImg} key={data.id} style={{height: '100%'}} src={'http://localhost:8000/' + data.path} />))}
                        </Box>
                    </Item>
                    <Item>
                        <h2 style={{fontSize: '1.5rem', textTransform: 'uppercase', fontWeight: '500', marginBottom: '10px'}}>{dataProducts.name}</h2>
                        <b style={{fontSize: '1.5rem', textTransform: 'uppercase', fontWeight: '800', marginBottom: '15px', display: 'inline-block'}}>{dataProducts.price}$</b>
                        <p style={{marginBottom: '15px'}}>Availability: <span style={{color: 'red'}}>{dataProducts.count > 0 ? 'In Stock' : 'Out of stock'}</span></p>
                        <Quanlty />
                        <Description data={dataProducts.description} />
                    </Item>
                </Box>
                <SimilarProduct id={dataProducts.category_id} />
            </Container>
        </React.Fragment>
    )
}

export default ProductDetail