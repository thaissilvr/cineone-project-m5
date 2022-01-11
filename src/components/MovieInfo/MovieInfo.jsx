import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import Axios from "axios"
import style from "./MovieInfo.module.css"
import {Link} from "react-router-dom";




function MovieInfo () {
   const [movieInfo, setMovieInfo] = useState([])
   const {id_movie} = useParams();
   const [rooms, setRooms] = useState([])
   const [loading, setLoading] = useState(false)

   useEffect (() => {
    const getInfo = async () => {
        await Axios.get(`https://cineone-api.herokuapp.com/movie/${id_movie}`).then((response) => {
        setMovieInfo(response.data)
        }
    )}
    const getShowTime = async () => {
        await Axios.get(`https://cineone-api.herokuapp.com/room`).then((response) => {
        setRooms(response.data)
    }            
    )}
 
   getInfo() 
   getShowTime()
   setLoading(true)
}, [id_movie])

        if (!loading) {
        return <h1>Carregando...</h1>
        }


    const showInfo =  movieInfo.map((movie) => {
    const movieRooms = rooms.filter(room => room.id_movie === movie.id_movie);
    const time = movieRooms.map(room => {
            return (
                    <ul className={style.escolheSessao}>
                    <Link to={`/assentos`}>
                        <li><button>{room.time}</button> </li>  
                    </Link>
                    </ul>
            )
        }
    )

    return (
        <main>
            <img src= {`${movie.urlImg}`} alt="Imagem do filme"></img>
            <h2>{`${movie.name}`}</h2>
            <p>Gênero: {`${movie.genre}`}</p>
            <p>Classificação: {`${movie.rating}`}</p>
            <p>Duração: {`${movie.movie_length}`}</p>
            <p>Sinopse: {`${movie.synopsis}`}</p>
            <p>Horário: {time}</p>

        </main>
 )

    })

  
    return(

        <main className={style.infoContainer}>
            <div className={style.info}>
                {showInfo}
            </div>  
        </main>
    )
}

export default MovieInfo