import style from "./Bomboniere.module.css"
import {useRef} from 'react'

function Bomboniere(){
    const carousel1 = useRef(null)

    const handleLeftClick1 = (e)=>{
        e.preventDefault()
        carousel1.current.scrollLeft -= carousel1.current.offsetWidth
    }
    const handleRightClick1 = (e)=>{
        e.preventDefault()
        carousel1.current.scrollLeft += carousel1.current.offsetWidth
    }

    const carousel2 = useRef(null)

    const handleLeftClick2 = (e)=>{
        e.preventDefault()
        carousel2.current.scrollLeft -= carousel2.current.offsetWidth
    }
    const handleRightClick2 = (e)=>{
        e.preventDefault()
        carousel2.current.scrollLeft += carousel2.current.offsetWidth
    }

    const carousel3 = useRef(null)

    const handleLeftClick3 = (e)=>{
        e.preventDefault()
        carousel3.current.scrollLeft -= carousel3.current.offsetWidth
    }
    const handleRightClick3 = (e)=>{
        e.preventDefault()
        carousel3.current.scrollLeft += carousel3.current.offsetWidth
    }

    return(
        <div className={style.container}>
            <div className={style.title}>
                <h1>Pipocas</h1>
            </div>
            <div className={style.box}>
            <div className={style.button1}>
                <button onClick={handleLeftClick1}>
                    <img className={style.seta1} src= {require ("./static/setinhaesquerda.png")} alt="Seta para esquerda"></img>
                </button>
            </div>
            <div className={style.carousel} ref={carousel1}>
                <div className={style.item}>
                    <div className={style.image}>
                        <img className={style.fotos}src= {require ("./static/p1.png")} alt="Pipoca Salgada Mini"></img>
                    </div>
                    <div className={style.info}>
                        <span className={style.name}>Pipoca Salgada Mini</span>
                        <span className={style.price}>R$ 20,00</span>
                    </div>
                </div>
                <div className={style.item}>
                    <div className={style.image}>
                        <img className={style.fotos}src= {require ("./static/p2.png")} alt="Pipoca Salgada Mega"></img>
                    </div>
                    <div className={style.info}>
                        <span className={style.name}>Pipoca Salgada Mega</span>
                        <span className={style.price}>R$ 25,00</span>
                    </div>
                </div>
                <div className={style.item}>
                    <div className={style.image}>
                        <img className={style.fotos}src= {require ("./static/p3.png")} alt="Pipoca Salgada Giga"></img>
                    </div>
                    <div className={style.info}>
                        <span className={style.name}>Pipoca Salgada Giga</span>
                        <span className={style.price}>R$ 30,00</span>
                    </div>
                </div>
                <div className={style.item}>
                    <div className={style.image}>
                        <img className={style.fotos}src= {require ("./static/p4.png")} alt="Pipoca Doce Mini"></img>
                    </div>
                    <div className={style.info}>
                        <span className={style.name}>Pipoca Doce Mini</span>
                        <span className={style.price}>R$ 25,00</span>
                    </div>
                </div>
                <div className={style.item}>
                    <div className={style.image}>
                        <img className={style.fotos}src= {require ("./static/p5.png")} alt="Pipoca Doce Mega"></img>
                    </div>
                    <div className={style.info}>
                        <span className={style.name}>Pipoca Doce Mega</span>
                        <span className={style.price}>R$ 30,00</span>
                    </div>
                </div>
                <div className={style.item}>
                    <div className={style.image}>
                        <img className={style.fotos}src= {require ("./static/p6.png")} alt="Pipoca Doce Giga"></img>
                    </div>
                    <div className={style.info}>
                        <span className={style.name}>Pipoca Doce Giga</span>
                        <span className={style.price}>R$ 35,00</span>
                    </div>
                </div>
            </div>
            <div className={style.button2}>
                <button onClick={handleRightClick1}>
                    <img className={style.seta2}src= {require ("./static/setinhadireita.png")} alt="Seta para direita"></img>
                </button>
            </div>
            </div>

            <div className={style.title}>
                <h1>Bebidas</h1>
            </div>
            <div className={style.box}>
            <div className={style.button1}>
                <button onClick={handleLeftClick2}>
                    <img className={style.seta1} src= {require ("./static/setinhaesquerda.png")} alt="Seta para esquerda"></img>
                </button>
            </div>
            <div className={style.carousel} ref={carousel2}>
                <div className={style.item}>
                    <div className={style.image}>
                        <img className={style.fotos}src= {require ("./static/b1.png")} alt="Refrigerante 500ml"></img>
                    </div>
                    <div className={style.info}>
                        <span className={style.name}>Refrigerante 500ml</span>
                        <span className={style.price}>R$ 10,00</span>
                    </div>
                </div>
                <div className={style.item}>
                    <div className={style.image}>
                        <img className={style.fotos}src= {require ("./static/b2.png")} alt="Refrigerante 700ml"></img>
                    </div>
                    <div className={style.info}>
                        <span className={style.name}>Refrigerante 700ml</span>
                        <span className={style.price}>R$ 12,00</span>
                    </div>
                </div>
                <div className={style.item}>
                    <div className={style.image}>
                        <img className={style.fotos}src= {require ("./static/b3.png")} alt="Refrigerante 1L"></img>
                    </div>
                    <div className={style.info}>
                        <span className={style.name}>Refrigerante 1L</span>
                        <span className={style.price}>R$ 18,00</span>
                    </div>
                </div>
                <div className={style.item}>
                    <div className={style.image}>
                        <img className={style.fotos}src= {require ("./static/b4.png")} alt="Del Valle Uva"></img>
                    </div>
                    <div className={style.info}>
                        <span className={style.name}>Del Valle Uva</span>
                        <span className={style.price}>R$ 4,50</span>
                    </div>
                </div>
                <div className={style.item}>
                    <div className={style.image}>
                        <img className={style.fotos}src= {require ("./static/b5.png")} alt="Del Valle Limão"></img>
                    </div>
                    <div className={style.info}>
                        <span className={style.name}>Del Valle Limão 450ml</span>
                        <span className={style.price}>R$ 5,00</span>
                    </div>
                </div>
                <div className={style.item}>
                    <div className={style.image}>
                        <img className={style.fotos}src= {require ("./static/b6.png")} alt="Matte Leão Fuze"></img>
                    </div>
                    <div className={style.info}>
                        <span className={style.name}>Matte Leão Fuze Chá preto & limão</span>
                        <span className={style.price}>R$ 3,50</span>
                    </div>
                </div>
            </div>
            <div className={style.button2}>
                <button onClick={handleRightClick2}>
                    <img className={style.seta2}src= {require ("./static/setinhadireita.png")} alt="Seta para direita"></img>
                </button>
            </div>
            </div>

            <div className={style.title}>
                <h1>Doces</h1>
            </div>
            <div className={style.box}>
            <div className={style.button1}>
                <button onClick={handleLeftClick3}>
                    <img className={style.seta1} src= {require ("./static/setinhaesquerda.png")} alt="Seta para esquerda"></img>
                </button>
            </div>
            <div className={style.carousel} ref={carousel3}>
                <div className={style.item}>
                    <div className={style.image}>
                        <img className={style.fotos}src= {require ("./static/d1.png")} alt="Snickers"></img>
                    </div>
                    <div className={style.info}>
                        <span className={style.name}>Snickers 52g</span>
                        <span className={style.price}>R$ 4,00</span>
                    </div>
                </div>
                <div className={style.item}>
                    <div className={style.image}>
                        <img className={style.fotos}src= {require ("./static/d2.png")} alt="Twix"></img>
                    </div>
                    <div className={style.info}>
                        <span className={style.name}>Twix 45g</span>
                        <span className={style.price}>R$ 5,00</span>
                    </div>
                </div>
                <div className={style.item}>
                    <div className={style.image}>
                        <img className={style.fotos}src= {require ("./static/d3.png")} alt="M&Ms Família Amendoim"></img>
                    </div>
                    <div className={style.info}>
                        <span className={style.name}>M&Ms Família Amendoim 200g</span>
                        <span className={style.price}>R$ 9,50</span>
                    </div>
                </div>
                <div className={style.item}>
                    <div className={style.image}>
                        <img className={style.fotos}src= {require ("./static/d4.png")} alt="M&Ms Família Chocolate"></img>
                    </div>
                    <div className={style.info}>
                        <span className={style.name}>M&Ms Família Chocolate 200g</span>
                        <span className={style.price}>R$ 9,50</span>
                    </div>
                </div>
                <div className={style.item}>
                    <div className={style.image}>
                        <img className={style.fotos}src= {require ("./static/d5.png")} alt="Tubes Morango Cítrico"></img>
                    </div>
                    <div className={style.info}>
                        <span className={style.name}>Tubes Morango Cítrico 80g</span>
                        <span className={style.price}>R$ 4,50</span>
                    </div>
                </div>
                <div className={style.item}>
                    <div className={style.image}>
                        <img className={style.fotos}src= {require ("./static/d6.png")} alt="Bala de Gelatina Dentaduras"></img>
                    </div>
                    <div className={style.info}>
                        <span className={style.name}>Bala de Gelatina Dentaduras 100g</span>
                        <span className={style.price}>R$ 5,00</span>
                    </div>
                </div>
                <div className={style.item}>
                    <div className={style.image}>
                        <img className={style.fotos}src= {require ("./static/d7.png")} alt="Kit Kat Chocolate ao Leite"></img>
                    </div>
                    <div className={style.info}>
                        <span className={style.name}>Kit Kat Chocolate ao Leite 41,5g</span>
                        <span className={style.price}>R$ 3,00</span>
                    </div>
                </div>
                <div className={style.item}>
                    <div className={style.image}>
                        <img className={style.fotos}src= {require ("./static/d8.png")} alt="Fruittella Morango Mastigável"></img>
                    </div>
                    <div className={style.info}>
                        <span className={style.name}>Fruittella Morango Mastigável</span>
                        <span className={style.price}>R$ 2,00</span>
                    </div>
                </div>
                <div className={style.item}>
                    <div className={style.image}>
                        <img className={style.fotos}src= {require ("./static/d9.png")} alt="Mentos Beats Sortidos"></img>
                    </div>
                    <div className={style.info}>
                        <span className={style.name}>Mentos Beats Sortidos 35g</span>
                        <span className={style.price}>R$ 12,50</span>
                    </div>
                </div>
            </div>
            <div className={style.button2}>
                <button onClick={handleRightClick3}>
                    <img className={style.seta2}src= {require ("./static/setinhadireita.png")} alt="Seta para direita"></img>
                </button>
            </div>
            </div>
        </div>  
    )
}

export default Bomboniere