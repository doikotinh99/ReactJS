import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box, Button, CardActionArea } from '@mui/material';
import Item from '../components/Item'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import {styled} from '@mui/material'
import { Link } from "react-router-dom";
import { axiosAuth, axiosInstance } from "../utills/axios";

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
export default function ActionAreaCard({image, price, name, news, hots, slug, id}) {
  const StyleLink = styled(Link)(({theme})=>({
      color: "black",
      display: 'block'
  }))
  const user = JSON.parse(window.localStorage.getItem('user'))
  const user_id = user.id
  const addToCart = ()=>{
    axiosInstance.post('http://localhost:8000/api/cart', {user_id: user_id, product_id: id})
    .catch((error)=> console.log(error))
    .then((response)=>{
      let dom = document.getElementById('badge_header').children[1].innerText = response['data'] - 1;
      console.log({dom})
    })
  }
  return (
    
    <Card sx={{ maxWidth: 345 , boxShadow: 0}}>
      <CardActionArea sx={{position: 'relative'}}>
        <StyleLink to={'/product/' + slug}>
          <CardMedia
            component="img"
            height="250"
            image={image}
            alt="green iguana"
          />
          <CardContent sx={{px:0}}>
          <Box
              sx={{
                  p: 0,
                  display: 'grid',
                  gridTemplateColumns: { 
                      md: '10fr 2fr',
                  },
                  gap: 0,
                  width:'100%'
              }}>
                  <Item sx={{textAlign: 'left', p:'0 !important', wordBreak: 'break-all'}}>{name}</Item>
                  <Item sx={{textAlign: 'right', p:'0 !important'}}>{price}</Item>
            </Box>
          </CardContent>
        </StyleLink>
        <Box className="btnBoxCard">
          <div onClick={addToCart} style={{display: 'flex'}}><AddShoppingCartIcon /> <span className='text'>ADD TO CART</span></div>
          <span><FavoriteIcon /></span>
        </Box>
        {news && 
          <Stack className="CardChip news" direction="row" spacing={1}>
              <Chip label="New" color='success' />
          </Stack>
        }
        {hots === 1 &&
          <Stack className="CardChip hots" direction="row" spacing={1}>
            <Chip label="HOT" color='error' />
        </Stack>
        }
      </CardActionArea>
    </Card>
    
  );
}
