import React from 'react';
import Login from '../Authentication/User/Login';
import Registration from '../Authentication/User/Registration';

const Home = () => {
    return (
        <div>
            <Registration/>
            <Login/>
        </div>
    );
};

export default Home;