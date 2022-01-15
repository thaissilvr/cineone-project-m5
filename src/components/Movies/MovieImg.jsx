//função que trabalha com a requisição da imagem
import React from "react";
import style from "./MovieImg.module.css"

function MovieImg(props) {
    return(
      <div id_movie={props.id_movie}>
        <div className={style.imgPoster}>
          <img className={style.imagem} alt="filme.jpg" src={props.urlImg}/>
        </div>
      </div>
    );
}

export default MovieImg;