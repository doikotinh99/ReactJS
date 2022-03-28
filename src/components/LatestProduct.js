import React from 'react';
import { Slide } from 'react-slideshow-image';
import ActionAreaCard from '../components/Card'


import 'react-slideshow-image/dist/styles.css'
import { Container } from '@mui/material';
const slideImages = [
  'upload/images/sp1.webp',
  'upload/images/sp2.webp',
  'upload/images/sp3.webp',
  'upload/images/sp4.webp',
  'upload/images/sp5.webp',
  'upload/images/sp6.webp',
];

const Slideshow = () => {
    const fadeProperties = {
        duration: 3000,
        pauseOnHover: true,
        duration: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        indicators: false
      };
      const style = {
        textAlign: 'center',
        fontSize: '30px',
        margin: '0px 5px'
      };
    
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
        <h2 style={{
            fontSize: '1.5rem',
            margin: '20px 0px 15px 0px',
            textAlign: 'center'
        }}>LATEST PRODUCTS</h2>
        <Slide className="LatestProduct" easing="ease" {...fadeProperties}>
          <div style={style}>
            <ActionAreaCard
            name="sp1" image={slideImages[0]} price="10$" />
          </div>
          <div style={style}>
            <ActionAreaCard name="sp1" image={slideImages[1]} price="10$" />
          </div>
          <div style={style}>
            <ActionAreaCard name="sp1" image={slideImages[2]} price="10$" />
          </div>
          <div style={style}>
            <ActionAreaCard name="sp1" image={slideImages[3]} price="10$" />
          </div>
          <div style={style}>
            <ActionAreaCard name="sp1" image={slideImages[4]} price="10$" />
          </div>
          <div style={style}>
            <ActionAreaCard name="sp1" image={slideImages[5]} price="10$" />
          </div>
        </Slide>
    </Container>
    )
};

export default Slideshow;