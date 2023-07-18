import React from 'react';

import slide1 from '../../img/IMG_8056.jpeg'
import slide2 from '../../img/IMG_2039.jpeg'
import slide3 from '../../img/camphoto_341603450.jpeg'
import slide4 from '../../img/camphoto_1297389768.jpeg'
import slide5 from '../../img/camphoto_1804928587.jpeg'
import slide6 from '../../img/camphoto_1594243340.jpeg'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../styles.css';

import {Navigation} from 'swiper/modules';

export const SliderSwiper = () => {
    const images = [
        {id: 1, photo: slide1},
        {id: 2, photo: slide2},
        {id: 3, photo: slide3},
        {id: 4, photo: slide4},
        {id: 5, photo: slide5},
        {id: 6, photo: slide6},
    ];
    const handleSlideClick = (slideId) => {
        console.log('Clicked on slide with id:', slideId);

    };
    return (
        <div className="slider-container">
            {/*//slidesPerView - это количество слайдов за раз, loop это бесконечный*/}
            <Swiper  spaceBetween={20} loop={true} navigation={true} modules={[Navigation]} breakpoints={{
                480: {
                    slidesPerView: 1.5,
                },
                1024: {
                    slidesPerView: 2,
                },
            }}>
                {images.map((image) => (
                    <SwiperSlide  onClick={() => handleSlideClick(image.id) }key={image.id}>
                        <img src={image.photo} alt="Slide"/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

