import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../../../images/1st.jpg'
import image2 from '../../../images/2nd.jpg'
import image3 from '../../../images/3rd.jpg'


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
                    src={image1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Student Visa</h3>
                    <p>Garanteed visa 100 % support</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3> Immigration Visa</h3>
                    <p>Canada immigration success rate is 95%</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image3}
                    alt="Third slide"
                />

                <Carousel.Caption className="text-dark">
                    <h3>Work Permit Visa</h3>
                    <p>Work permit visa success rate is 90%</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;