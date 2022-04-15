import React from 'react';
import Login from '../Authentication/User/Login';
import Registration from '../Authentication/User/Registration';
import Banner from '../Components/Banner/Banner';
import HotelAvabelity from '../Components/HotelAvabelity/HotelAvabelity';

const Home = () => {
    return (
        <div>
            <Banner />
            <HotelAvabelity/>
            <Registration/>
            <Login/>
        </div>
    );
};

export default Home;