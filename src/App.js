import React from "react"
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MovieInfo from "./components/MovieInfo/MovieInfo";
import MovieList from "./components/Movies/MovieList";
import Auditorium from "./components/Auditorium/Auditorium"
import Unidades from "./components/Unidades/Unidades";
import Bomboniere from "./components/Bomboniere/Bomboniere";

function App () {
  return (
    <div> 
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/programacao" element={<MovieList/>}/> 
                <Route path="/bomboniere" element={<Bomboniere/>}/>
                <Route path="/informacoes/:id_movie" element={<MovieInfo/>} /> 
                <Route path="/assentos" element={<Auditorium/>}/>
                <Route path="/unidades" element={<Unidades/>}/> 

            </Routes>
            <Footer/>
        </BrowserRouter>
    </div>
  );
}


export default App;
