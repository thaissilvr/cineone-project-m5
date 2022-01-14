import style from "./Bomboniere.module.css"
import {useRef} from 'react'

function Bomboniere(){
    const carousel = useRef(null)

    const handleLeftClick = (e)=>{
        e.preventDefault()
        carousel.current.scrollLeft -= carousel.current.offsetWidth
    }
    const handleRightClick = (e)=>{
        e.preventDefault()
        carousel.current.scrollLeft += carousel.current.offsetWidth
    }
    return(
        <div className={style.container}>
            <div className={style.title}>
                <h1>Pipocas</h1>
            </div>
            <div className={style.box}>
            <div className={style.button1}>
                <button onClick={handleLeftClick}>
                    <img className={style.setas} src= {require ("./static/setinhaesquerda.png")} alt="Seta para esquerda"></img>
                </button>
            </div>
            <div className={style.carousel} ref={carousel}>
                <div className={style.item}>
                    <div className={style.image}>
                        <img src= {require ("./static/popcornmini3.png")} alt="Pipoca Salgada Mini"></img>
                    </div>
                    <div className={style.info}>
                        <span className={style.name}>Pipoca Salgada Mini</span>
                        <span className={style.price}>R$ 00,00</span>
                    </div>
                </div>
                <div className={style.item}>
                    <div className={style.image}>
                        <img src= {require ("./static/popcornmini3.png")} alt="Pipoca Salgada Mega"></img>
                    </div>
                    <div className={style.info}>
                        <span className={style.name}>Pipoca Salgada Mega</span>
                        <span className={style.price}>R$ 00,00</span>
                    </div>
                </div>
                <div className={style.item}>
                    <div className={style.image}>
                        <img src= {require ("./static/popcornmini3.png")} alt="Pipoca Salgada Giga"></img>
                    </div>
                    <div className={style.info}>
                        <span className={style.name}>Pipoca Salgada Giga</span>
                        <span className={style.price}>R$ 00,00</span>
                    </div>
                </div>
                <div className={style.item}>
                    <div className={style.image}>
                        <img src= {require ("./static/popcornmini3.png")} alt="Pipoca Doce Mini"></img>
                    </div>
                    <div className={style.info}>
                        <span className={style.name}>Pipoca Doce Mini</span>
                        <span className={style.price}>R$ 00,00</span>
                    </div>
                </div>
                <div className={style.item}>
                    <div className={style.image}>
                        <img src= {require ("./static/popcornmini3.png")} alt="Pipoca Doce Mega"></img>
                    </div>
                    <div className={style.info}>
                        <span className={style.name}>Pipoca Doce Mega</span>
                        <span className={style.price}>R$ 00,00</span>
                    </div>
                </div>
                <div className={style.item}>
                    <div className={style.image}>
                        <img src= {require ("./static/popcornmini3.png")} alt="Pipoca Doce Giga"></img>
                    </div>
                    <div className={style.info}>
                        <span className={style.name}>Pipoca Doce Giga</span>
                        <span className={style.price}>R$ 00,00</span>
                    </div>
                </div>
            </div>
            <div className={style.button2}>
                <button onClick={handleRightClick}>
                    <img src= {require ("./static/setinhadireita.png")} alt="Seta para direita"></img>
                </button>
            </div>
            </div>
        </div>  
    )
}

export default Bomboniere