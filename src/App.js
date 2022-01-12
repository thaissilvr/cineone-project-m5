import React from "react"
import './App.css';
import Header from "./components/Header/Header"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MovieInfo from "./components/MovieInfo/MovieInfo";
import MovieList from "./components/Movies/MovieList";
import Auditorium from "./components/Auditorium/Auditorium"
import Unidades from "./components/Unidades/Unidades";

function App () {
  return (
    <div> 
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<h1>Página Inicial</h1>}/>
                <Route path="/programacao" element={<MovieList/>}/> 
                <Route path="/bomboniere" />
                <Route path="/informacoes/:id_movie" element={<MovieInfo/>} /> 
                <Route path="/assentos" element={<Auditorium/>}/>
                <Route path="/unidades" element={<Unidades/>}/> 

            </Routes>
        </BrowserRouter>
    </div>
  );
}


export default App;
