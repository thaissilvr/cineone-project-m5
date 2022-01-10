import React from "react"
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./components/Header/Header"
import Movies from "./components/Movies/Movies"
import Carousel from "./components/Carousel/Carousel"
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App () {
  return (
    <div> 
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Carousel/>}/>
                <Route path="/programacao" element={<Movies/>}/> 
                <Route path="/bomboniere" />
                <Route path="/unidades"/>          
            </Routes>
        </BrowserRouter>
    </div>
  );
}


export default App;
