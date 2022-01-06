import React, { Component } from "react";
import Auditorium from "../Auditorium/Auditorium";

class Movies extends Component{
    render () {
        return (
            <main>
                <h2>Aqui é a página dos filmes! Em construção. </h2>
                {/* Vou deixar o seats aqui só por enquanto kk */}
                <Auditorium/>
                
            </main>
        )
    }
}

export default Movies;