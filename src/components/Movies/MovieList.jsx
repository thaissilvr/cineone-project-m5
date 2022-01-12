import React, { useEffect } from "react";
import Axios from "axios";
import style  from "./Movies.module.css";
import { useState } from "react/cjs/react.development";
import {Link} from "react-router-dom";
import MovieImg from "./MovieImg";



function MovieList () {

    const [movies, setMovies] = useState([])
    useEffect (() => {
        const getMovies = async () => {
            await Axios.get(`https://cineone-api.herokuapp.com/movie`).then((response) => {
                     setMovies(response.data)
                 }
             )
        }
       getMovies() 
    }, [])
    console.log(movies)
    
    const movieDisplay =  movies.map((movie) => {
        return (
            <Link key={movie.id_movie} to={`/informacoes/${movie.id_movie}`}>
                <MovieImg id_movie={movie.id_movie} urlImg={movie.urlImg} />
            </Link>
        )   
    } )

    return (
        <main className={style.mainInfo}>
            <h1 className={style.prog}>Confira a nossa programação logo abaixo:</h1>
                <div className={style.poster}>
                {movieDisplay}
            </div>
        </main>
    )

}

export default MovieList;