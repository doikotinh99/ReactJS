import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import Item from '../components/Item'

export default function ActionAreaCard({image, price, name}) {
  return (
    <Card sx={{ maxWidth: 345 , boxShadow: 0}}>
      <CardActionArea>
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
      </CardActionArea>
    </Card>
  );
}
