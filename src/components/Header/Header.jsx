import React from "react";
import style from "./Header.module.css"
import film from "./logo.PNG"
import { Link } from 'react-router-dom'

function Header () {

        return (
            <header className={style.headerMain}>
                <ul>
                    <Link to="">
                        <img className={style.img} src={film} alt="" />
                    </Link>
                    <Link to="" className={style.nav}>Home</Link>
                    <Link to="/programacao" className={style.nav}>Programação</Link>
                    <Link to="/bomboniere" className={style.nav}>Bomboniere</Link>
                    <Link to="/unidades" className={style.nav}>Nossas Unidades</Link>
                </ul>
            </header>

        )
    }


export default Header;