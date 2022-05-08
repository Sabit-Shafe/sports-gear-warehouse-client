import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import image2 from '../../../images/2nd.jpg'
import image3 from '../../../images/3rd.jpg'
import image4 from '../../../images/4th.jpg'


const Slider = () => {





    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect} fade className="mb-5 container ">
            <Carousel.Item>
                <img
                    className="d-block w-100 h-50"
                    src={image4}
                    alt="First slide"
                />
                <Carousel.Caption className="text-dark" >
                    <h3 >Bike Helmet</h3>
                    <p >High quality bike helmet</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Football sports gear</h3>
                    <p>Best football sport gear</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image3}
                    alt="Third slide"
                />

                <Carousel.Caption className="text-light">
                    <h3>various sports equipment</h3>
                    <p>sports equipment quality is 100%</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;