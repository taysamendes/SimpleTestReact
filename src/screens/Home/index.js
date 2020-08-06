import React from 'react';

import {doGet} from '../../helpers/APIHelper'

const Home = () => {

    doGet('/people').then(console.log);
    
    return <h1>Home</h1>
};

export default Home;
