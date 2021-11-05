import React from 'react';
import UseAuth from '../../../Hooks/UseAuth';
import './Banner.css'

const Banner = () => {
    const {user}=UseAuth();
   
    return (
        <div className='banner'>
         <div className='d-flex justify-content-center align-items-center h-100'>
             <div >
                 <h1 className='banner-header'>Make Your Ideas Possible</h1>
                 <p className='banner-sub-header'>Explore top rated tours,hotels and retaurant around the world</p>
                 <button className="banner-btn">Get Started</button>
             </div>
         </div>
        </div>
    );
};

export default Banner;