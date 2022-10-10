import { Box } from "@mui/system";
import React, { useState } from "react";
import { Container } from "@mui/material";

// component
import Features from '../components/Features'
import Carousel from '../parts/Carousel_index'
import axios from "axios";

function Home(){
    document.title = "restaurant"
    return (
        <React.Fragment>
            <Carousel />
            <Features />
        </React.Fragment>
    )
}

export default Home