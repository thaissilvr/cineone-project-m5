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
        <div className={style.div_unidades}></div>
        <div className={style.div_unidades}></div>
        <div className={style.div_unidades}></div>
      </div>
    </div>
  );
}

export default Unidades;
