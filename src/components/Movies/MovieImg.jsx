//função que trabalha com a requisição da imagem
import React from "react";

function MovieImg(props) {
    return(
      <div id_movie={props.id_movie}>
        <div>
          <img alt="filme.jpg" src={props.urlImg}/>
        </div>
      </div>
    );
}

export default MovieImg;