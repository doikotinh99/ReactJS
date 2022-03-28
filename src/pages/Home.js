import React from "react";


// component
import Features from '../components/Features'
import LatestProduct from '../components/LatestProduct'
function Home(){
    document.title = "home"
    return (
        <React.Fragment>
            <Features />
            <LatestProduct />
        </React.Fragment>
    )
}

export default Home