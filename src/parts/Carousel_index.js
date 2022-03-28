import { Button, Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Item from "../components/Item";

function Carousel(){
  const dataSlide = [
    {
      title: "Event planning and Management",
      path: '/upload/images/slideshow1.webp',
      'discription': "We do event planning management for all different types of events from weddings, birthdays ,coopera...",
      money: '0.50$'
    },
    {
      title: "Beads",
      path: '/upload/images/slideshow2.webp',
      'discription': "We have a wide range of beads from hair beads, necklaces, bracelets etc",
      money: '500$'
    }
    
  ]

  const [indexSlide, setIndexSlide] = React.useState(0)

  React.useEffect(()=>{
    const handleTime = ()=>{
      setIndexSlide(prev => {
        if(prev >= dataSlide.length - 1)
        return 0;
        else return prev + 1;
      })
    }
    const timeOut = setInterval(handleTime, 10000)
    return ()=>{
      clearInterval(timeOut)
    }
  }, [])
  return (
    <Box className="slideShow" sx={{
      height: '310px',
      overflow: 'Hidden'
    }}>
      {
        dataSlide.map((data, index)=>
          <Box className={['item', index === indexSlide && 'show']} key={index}>
            <img style={{width: '100%'}} src={data.path} alt="" />
            <Box className={["disc"]}>
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
                          md: '1fr 1fr',
                      },
                      gap: 0,
                      width:'100%'
                  }}
                >
                  <Item>
                    <h2 className={index === indexSlide ? 'show' : 'hiddent'}>{data.title}</h2>
                    <p className={index === indexSlide ? 'discription show' : 'discription hiddent'}>{data.discription}</p>
                    <Button className={index === indexSlide ? 'show' : 'hiddent'} sx={{mr:'15px'}} variant="outlined" color="inherit" size="large">
                    BUY NOW
                    </Button>
                    <Button sx={{color: 'black'}} className={index === indexSlide ? 'show' : 'hiddent'} variant="contained" color="inherit" size="large">
                    INQUIRE
                    </Button>
                    
                  </Item>
                  <Item>
                    <Box className={["circleRightS", index === indexSlide ? 'show' : 'hiddent']}>
                      <div>
                        <div>
                          <p>From</p>
                          <p>{data.money}</p>
                          <p>SHOP NOW</p>
                        </div>
                      </div>
                    </Box>
                  </Item>
                </Box>
               
              </Container>
            </Box>
          </Box>
        )
      }
      
    </Box>
  )

}

export default Carousel