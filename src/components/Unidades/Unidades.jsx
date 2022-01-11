import React from "react";
import style from "./Unidades.module.css";

function Unidades() {
  return (
    <div className={style.container_1}>
      <div className={style.div_title}>
        <h1>
          Verifique nossas unidades disponíveis e aproveite com sua família e
          amigos!
        </h1>
      </div>

      <div className={style.container_2}>
        <div className={style.div_unidades}>
          <div className={style.img}>
            <img
              className={style.img_css}
              src={require("./img/sao_paulo.jpg")}
              alt="Imagem da ponte staiada em São Paulo"
            ></img>
          </div>
          <div className={style.info}>
            <span className={style.city_name}>São Paulo - SP</span>
            <span className={style.address}>
              Av. Paulista 1300 - Bela Vista - 01311-000
            </span>
          </div>
        </div>
        <div className={style.div_unidades}>
          <div className={style.img}>
            <img
              className={style.img_css}
              src={require("./img/rio-de-janeiro.jpg")}
              alt="Imagem do pão de açúcar no Rio de Jnaiero"
            ></img>
          </div>
          <div className={style.info}>
            <span className={style.city_name}>Rio de Janeiro - RJ</span>
            <span className={style.address}>
              Av. Atlântica 1020 - Copacabana - 22010-000
            </span>
          </div>
        </div>

        <div className={style.div_unidades}>
          <div className={style.img}>
            <img
              className={style.img_css}
              src={require("./img/bahia.jpg")}
              alt="Imagem da cidade de Salvador - Bahia"
            ></img>
          </div>
          <div className={style.info}>
            <span className={style.city_name}>Salvador - BA</span>
            <span className={style.address}>
              Av. da França 400 - Comércio - 40010-000
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Unidades;
