import React from 'react';
import Help from './Help/Help';
import Newsletter from './Newsletter/Newsletter';
// import Services from './Services/Services';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <>
        <Slider></Slider>
        {/* <Services></Services> */}
        <Help></Help>
        <Newsletter></Newsletter>
        </>
    );
};

export default Home;