import React from "react";
import style from "./Header.module.css"
import { Link } from 'react-router-dom'

function Header () {

        return (
            <header className={style.headerMain}>
                <ul>
                    <Link to="">
                        <h1>CINEONE</h1>
                    </Link>
                    <Link to="/programacao">Programação</Link>
                    <Link to="">Bomboniere</Link>
                    <Link to="">Nossas Unidades</Link>
                </ul>
            </header>

        )
    }


export default Header;