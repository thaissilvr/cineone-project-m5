import React from 'react';
import style from './Carousel.module.css';
import Slider from 'react-slick';
import spiderPoster from './images/spiderPoster.jpg';
import matrixPoster from './images/matrixPoster.png';
import encantoPoster from './images/encantoPoster.png';

function Carousel () {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 7000,
        slidesToShow: 1,
        slidesToScrow: 1,
        cssEase: 'linear',
        pauseOnHover: true
    };

    return (
        <div className={style.carouselMain}>
            <h2 className={style.cartaz}>Em Cartaz</h2>
            <Slider {...settings} className={style.carousel}>
                <div className={style.carouselContainer}>
                    <img src={spiderPoster} className={style.carouselImg} alt="" />
                </div>

                <div className={style.carouselContainer}>
                    <img src={matrixPoster} className={style.carouselImg} alt="" />
                </div>

                <div className={style.carouselContainer}>
                    <img src={encantoPoster} className={style.carouselImg} alt="" />
                </div>
            </Slider>
        </div>
    )
}

export default Carousel;