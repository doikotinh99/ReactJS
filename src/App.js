import React from 'react';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
//
import Header from './parts/Header.js'
import Footer from './parts/Footer.js'
import Home from './pages/Home'
import Login from './pages/Login'
import Carousel from './parts/Carousel_index'

// scss
import './App.css';
import './assets/scss/app.scss';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Carousel />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
