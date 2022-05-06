import React from 'react';
import Help from './Help/Help';
import Newsletter from './Newsletter/Newsletter';
// import Services from './Services/Services';
import Slider from './Slider/Slider';
import Items from './Items/Items';

const Home = () => {
    return (
        <>
        <Slider></Slider>
        {/* <Services></Services> */}
        <Help></Help>
        <Items></Items>
        <Newsletter></Newsletter>
        </>
    );
};

export default Home;