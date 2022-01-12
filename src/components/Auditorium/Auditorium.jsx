import React from "react";

import style from './Auditorium.module.css'



function Auditorium () {
        

     return(
        <main className={style.mainHeader}>
 

            <div className={style.trying}>
         
            <div className={style.totalContainer}>
            <h2>Reserve seu assento:</h2>
            <div className={style.screen}><p>TELA</p></div>
            <ul className={style.seatsContainer}>
                <li className={style.seat}></li>
                <li className={style.occupied}></li>
                <li className={style.occupied}></li>
                <li className={style.occupied}></li>
                <li className={style.seat}></li>
                <li className={style.seat}></li>
                <li className={style.seat}></li>
                <li className={style.seat}></li>
                <li className={style.seat}></li>
                <li className={style.seat}></li>
                <li className={style.seat}></li>
                <li className={style.seat}></li>
                <li className={style.occupied}></li>
                <li className={style.occupied}></li>
                <li className={style.seat}></li>
                <li className={style.seat}></li>
                <li className={style.seat}></li>
                <li className={style.seat}></li>
                <li className={style.seat}></li>
                <li className={style.seat}></li>
                <li className={style.occupied}></li>
                <li className={style.seat}></li>
                <li className={style.seat}></li>
                <li className={style.seat}></li>
                <li className={style.seat}></li>
                <li className={style.seat}></li>
                <li className={style.seat}></li>
                <li className={style.seat}></li>
                <li className={style.seat}></li>
                <li className={style.seat}></li>
                <li className={style.seat}></li>
                <li className={style.seat}></li>
                <li className={style.seat}></li>
                <li className={style.seat}></li>
                <li className={style.seat}></li>
                <li className={style.seat}></li>
                <li className={style.seat}></li>
                <li className={style.seat}></li>
                <li className={style.seat}></li>
                <li className={style.seat}></li>
                </ul>

                <ul className={style.statusContainer}>
                    <li className={style.available}>Disponível</li>
                    <li className={style.occupied}>Reservado</li>
                    <li className={style.selected}>Selecionado</li>
                </ul>

            </div>

            </div>

             <div className={style.trying}>     
            <div className={style.infoContainer}>
                <h2>Dados da reserva</h2>
                <p>Insira seus dados abaixo para receber os dados de sua reserva e o link para pagamento:</p>
                        
                    <label htmlFor="nome">Nome</label>
                    <input typeof="textarea" className={style.inputBox}></input>

                    <label htmlFor="email">E-mail</label>
                    <input typeof="email" className={style.inputBox}></input>

                    <button className={style.button}>Quero meu ingresso!</button>
            </div>
            </div> 

        </main>

     )
    }


export default Auditorium;
