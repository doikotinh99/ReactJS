import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box, CardActionArea } from '@mui/material';
import { Button } from "@mui/material";

export default function CardBlog({image, time, name}) {
    
  return (
    <Card sx={{ maxWidth: 345 , boxShadow: 0, bgcolor: "#fff0", color: "white", mb: '5px'}}>
        
      <CardActionArea>
        <Box
        sx={{
            p: 0,
            display: 'grid',
            gridTemplateColumns: { 
                md: '3fr 10fr',
            },
            gap: 0,
            width:'100%'
        }}>
            <CardMedia
            component="img"
            image={image}
            alt="green iguana"
            />
            <CardContent sx={{py:0}}>
                <h3>{name}</h3>
                <span style={{
                    display: 'block',
                    fontSize: '12px',
                    color: '#8f8f8f',
                    marginBottom: '4px',
                    marginTop: '2px'
                }}>Time</span>
                <a style={{padding:'5px 0', color: 'red'}}>Read More</a>
            </CardContent>
            
        </Box>     
      </CardActionArea>
    </Card>
  );
}
