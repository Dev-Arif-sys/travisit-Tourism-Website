import React from 'react';
import Banner from './Banner/Banner';
import Tours from './Tours/Tours';
import Tourtype from './Tourtype/Tourtype';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tours></Tours>
            <Tourtype></Tourtype>
        </div>
    );
};

export default Home;