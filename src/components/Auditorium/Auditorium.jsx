import React, { useState } from "react";
import style from './Auditorium.module.css'


function Auditorium() {
    const [name, setName] = useState([]);

    function clica({ target }) {
        let newArr = [...name];
        if (newArr.indexOf(target.name) === -1) newArr.push(target.name);
        else {
            const removeName = newArr.filter((item) => item !== target.name);
            newArr = removeName;
        }
        setName(newArr);
    }

    return (
        <main className={style.mainHeader}>
            <div className={style.seatsContainer}>
                <h2 className={style.reserva}>Reserve seu assento:</h2>
                <div className={style.screen}></div>

                <div className={style.assentos}>
                    <ul>
                        <li> <input
                            type="button"
                            name="1"
                            onClick={clica}
                            style={{
                                backgroundColor: name.indexOf("1") === -1 ? "green" : "red"
                            }} /></li>

                        <li> <input
                            type="button"
                            name="2"
                            onClick={clica}
                            style={{
                                backgroundColor: name.indexOf("2") === -1 ? "green" : "red"
                            }}
                        /></li>

                        <li> <input
                            type="button"
                            name="3"
                            onClick={clica}
                            style={{
                                backgroundColor: name.indexOf("3") === -1 ? "green" : "red"
                            }}
                        /></li>

                        <li><input
                            type="button"
                            name="4"
                            onClick={clica}
                            style={{
                                backgroundColor: name.indexOf("4") === -1 ? "green" : "red"
                            }}
                        /></li>

                        <li><input
                            type="button"
                            name="5"
                            onClick={clica}
                            style={{
                                backgroundColor: name.indexOf("5") === -1 ? "green" : "red"
                            }}
                        /></li>

                        <li><input
                            type="button"
                            name="6"
                            onClick={clica}
                            style={{
                                backgroundColor: name.indexOf("6") === -1 ? "green" : "red"
                            }}
                        /></li>

                        <li><input
                            type="button"
                            name="7"
                            onClick={clica}
                            style={{
                                backgroundColor: name.indexOf("7") === -1 ? "green" : "red"
                            }}
                        /></li>

                        <li><input
                            type="button"
                            name="8"
                            onClick={clica}
                            style={{
                                backgroundColor: name.indexOf("8") === -1 ? "green" : "red"
                            }}
                        /></li>
                        <li> <input
                            type="button"
                            name="9"
                            onClick={clica}
                            style={{
                                backgroundColor: name.indexOf("9") === -1 ? "green" : "red"
                            }}
                        /></li>

                        <li><input
                            type="button"
                            name="10"
                            onClick={clica}
                            style={{
                                backgroundColor: name.indexOf("10") === -1 ? "green" : "red"
                            }}
                        /></li>

                        <li><input
                            type="button"
                            name="11"
                            onClick={clica}
                            style={{
                                backgroundColor: name.indexOf("11") === -1 ? "green" : "red"
                            }}
                        /></li>

                        <li><input type="button"
                            name="12"
                            onClick={clica}
                            style={{
                                backgroundColor: name.indexOf("12") === -1 ? "green" : "red"
                            }}
                        /></li>
                        <li><input
                            type="button"
                            name="13"
                            onClick={clica}
                            style={{
                                backgroundColor: name.indexOf("13") === -1 ? "green" : "red"
                            }}
                        /></li>
                        <li><input
                            type="button"
                            name="14"
                            onClick={clica}
                            style={{
                                backgroundColor: name.indexOf("14") === -1 ? "green" : "red"
                            }}
                        /></li>
                        <li><input
                            type="button"
                            name="15"
                            onClick={clica}
                            style={{
                                backgroundColor: name.indexOf("15") === -1 ? "green" : "red"
                            }}
                        /></li>
                        <li><input
                            type="button"
                            name="16"
                            onClick={clica}
                            style={{
                                backgroundColor: name.indexOf("16") === -1 ? "green" : "red"
                            }}
                        /></li>
                        <li><input
                            type="button"
                            name="17"
                            onClick={clica}
                            style={{
                                backgroundColor: name.indexOf("17") === -1 ? "green" : "red"
                            }}
                        /></li>
                        <li> <input
                            type="button"
                            name="18"
                            onClick={clica}
                            style={{
                                backgroundColor: name.indexOf("18") === -1 ? "green" : "red"
                            }}
                        /></li>
                        <li><input
                            type="button"
                            name="19"
                            onClick={clica}
                            style={{
                                backgroundColor: name.indexOf("19") === -1 ? "green" : "red"
                            }}
                        /></li>
                        <li><input
                            type="button"
                            name="20"
                            onClick={clica}
                            style={{
                                backgroundColor: name.indexOf("20") === -1 ? "green" : "red"
                            }}
                        /></li>
                        <li><input
                            type="button"
                            name="21"
                            onClick={clica}
                            style={{
                                backgroundColor: name.indexOf("21") === -1 ? "green" : "red"
                            }}
                        /></li>
                        <li><input
                            type="button"
                            name="22"
                            onClick={clica}
                            style={{
                                backgroundColor: name.indexOf("22") === -1 ? "green" : "red"
                            }}
                        /></li>
                        <li><input
                            type="button"
                            name="23"
                            onClick={clica}
                            style={{
                                backgroundColor: name.indexOf("23") === -1 ? "green" : "red"
                            }}
                        /></li>

                        <li><input
                            type="button"
                            name="24"
                            onClick={clica}
                            style={{
                                backgroundColor: name.indexOf("24") === -1 ? "green" : "red"
                            }}
                        /></li>
                        <li><input
                            type="button"
                            name="25"
                            onClick={clica}
                            style={{
                                backgroundColor: name.indexOf("25") === -1 ? "green" : "red"
                            }}
                        /></li>
                    </ul>
                </div>

                <ul className={style.statusContainer}>
                    <li className={style.available}>Disponível</li>
                    <li className={style.occupied}>Reservado</li>
                </ul>


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
    );
}

export default Auditorium;
