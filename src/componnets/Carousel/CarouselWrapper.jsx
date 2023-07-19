import React from 'react';
import {Carousel} from "./Carousel";
import slide1 from '../../img/camphoto_1594243340.jpeg'
import slide2 from '../../img/IMG_2039.jpeg'
import slide3 from '../../img/camphoto_341603450.jpeg'
import slide4 from '../../img/camphoto_1297389768.jpeg'
import slide5 from '../../img/camphoto_1804928587.jpeg'
import style from './carouselWrapper.module.css'

const CarouselWrapper = () => {
    const images = [
        {id: 1, photo: slide1},
        {id: 2, photo: slide2},
        {id: 3, photo: slide3},
        {id: 4, photo: slide4},
        {id: 5, photo: slide5},

    ];
    return (
        <div className='container'>
            <div className={style.aaa}>
        <Carousel>
            {images.map((el)=> <div key={el.id} >
                <img height={150} width={450} src={el.photo} alt=""/>
            </div>)}
        </Carousel>
            </div>
        </div>
    );
};

export default CarouselWrapper;