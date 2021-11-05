import React from 'react';
import Qoute from '../Qoute/Qoute';
import WhyTravist from '../WhyTravisit/WhyTravist';
import Banner from './Banner/Banner';
import Tours from './Tours/Tours';
import Tourtype from './Tourtype/Tourtype';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tours></Tours>
            <Qoute></Qoute>
            <WhyTravist></WhyTravist>
            <Tourtype></Tourtype>
        </div>
    );
};

export default Home;