import React from 'react';
import style from './ComingSoon.module.css';
import kingsmanPoster from './kingsmanPoster.jpg';
import panicoPoster from './panicoPoster.jpg'
import morbiusPoster from './morbiusPoster.jpg'

function ComingSoon () {

    return (
        <div className={style.comingSoonMain}>
            <h2 className={style.soon}>Em Breve</h2>
                <div className={style.gridComingSoon}>
                    <div className={style.comingSoonFilm1}>
                        <img src={kingsmanPoster} className={style.comingSoonImg} alt="" />
                    </div>

                    <div className={style.comingSoonFilm2}>
                        <img src={panicoPoster} className={style.comingSoonImg} alt="" />
                    </div>

                    <div className={style.comingSoonFilm3}>
                        <img src={morbiusPoster} className={style.comingSoonImg} alt="" />
                    </div>
                </div>
        </div>   
    )
}

export default ComingSoon;