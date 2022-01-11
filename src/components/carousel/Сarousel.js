import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Carousel.css';
import whisky from './whisky.json';

const CarouselPhoto = () => {
    return (
        <Carousel className='main-carousel'>
            <Carousel.Item interval={3000}>
                <img
                    className="d-block w-100"
                    src={whisky[0].imgUrl}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="d-block w-100"
                    src={whisky[1].imgUrl}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={whisky[2].imgUrl}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselPhoto;