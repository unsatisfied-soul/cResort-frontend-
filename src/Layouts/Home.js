import React from 'react';
import Login from '../Authentication/User/Login';
import Registration from '../Authentication/User/Registration';
import Banner from '../Components/Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner />
            <Registration/>
            <Login/>
        </div>
    );
};

export default Home;