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
                    <ul >
                    <Link to={`/assentos`}>
                        <li><button className={style.escolheSessao}>{room.time}</button> </li>  
                    </Link>
                    </ul>
            )
        }
    )

    return (
        <main className={style.infoContainer}>
            
            <div><img className={style.imgMovie} src= {`${movie.urlImg}`} alt="Imagem do filme"></img></div>
            
            <div>
            <h2 className={style.titleMovie}>{`${movie.name}`}</h2>
            <p className={style.pMovie}>Gênero: {`${movie.genre}`}</p>
            <p className={style.pRatingMovie}>Classificação: {`${movie.rating}`}</p>
            <p className={style.pTimeMovie}>Duração: {`${movie.movie_length}`}</p>
            <p className={style.pSynopsisMovie}>Sinopse: {`${movie.synopsis}`}</p>
            </div>

            <div><p className={style.movieTime}>Horário: </p>
            <p className={style.movieTime}>{time}</p></div>
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