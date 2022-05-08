import React from 'react';
import Helps from './Helps/Helps';
import Newsletter from './Newsletter/Newsletter';
// import Services from './Services/Services';
import Slider from './Slider/Slider';
import Items from './Items/Items';

const Home = () => {
    return (
        <>
        <Slider></Slider>
        {/* <Services></Services> */}
        <Helps></Helps>
        <Items></Items>
        <Newsletter></Newsletter>
        </>
    );
};

export default Home;