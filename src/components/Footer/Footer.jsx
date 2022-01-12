import React from "react";
import style from "./Footer.module.css"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom'

function Footer () {

        return (
            <footer className={style.footerMain}>
                <hr />
                <div className={style.footerFilms}>
                    <h3>Filmes</h3>
                    <li className={style.footerItems}>Filmes em Cartaz</li>
                    <li className={style.footerItems}>Em Breve</li>
                </div>

                <div className={style.footerBomboniere}>
                    <h3>Bomboniere</h3>
                    <li className={style.footerItems}>Lanches Individuais</li>
                    <li className={style.footerItems}>Combos</li>
                </div>

                <div className={style.footerAuditorium}>
                    <h3>Salas</h3>
                    <li className={style.footerItems}>2D</li>
                    <li className={style.footerItems}>3D</li>
                    <li className={style.footerItems}>IMAX</li>
                    <li className={style.footerItems}>4DX</li>
                </div>

                <div className={style.footerAbout}>
                    <h3>Sobre Nós</h3>
                    <li className={style.footerItems}>Nosso Trabalho</li>
                    <li className={style.footerItems}>Contato</li>
                </div>
                <hr />

                <div className={style.footerIcons}>
                    <li className={style.footerItems}><FaFacebook /></li>
                    <li className={style.footerItems}><FaInstagram /></li>
                    <li className={style.footerItems}><FaTwitter /></li>
                    <li className={style.footerItems}><FaLinkedin /></li>
                </div>
            </footer>

        )
    }


export default Footer;