import React from 'react';
import './WhyTravisiy.css'

const WhyTravist = () => {
    return (
        <div className='my-4 container'>
            <h2 className='fw-bold text-danger my-4 '>Why Travisit</h2>
           <div className='d-md-flex justify-content-around'>
               <div className='why-text text-start me-2'>
                   <h4 className='fw-bold '>Why should you love travisit</h4>
                   <p>Travel exposes us to different cultures and ancient traditions and through these authentic encounters, we learn to embrace and celebrate both our similarities and our differences. Travel teaches us about humanity and gives us an appreciation, understanding and respect for different points of view and ways of life.</p>
                   <p>Not all classrooms have four walls and travel is the best way to immerse yourself in geography, history, culture, gastronomy, languages, biology … you name it. Travel enriches the mind and educates us far beyond any textbook or travel guide. Not only do curious travellers learn about different landscapes, languages and lifestyles; glean fascinating facts while observing wild animals in their natural habitat; delve into a region’s history and taste the local flavours; but they also learn about themselves (and each other) along the way.</p>
               </div>
               <div className='why-img'>
                   <img src="https://i.ibb.co/Hxt3Rgt/simon-english-48ner-ZQCHgo-unsplash.jpg" alt="" />
               </div>
           </div>
        </div>
    );
};

export default WhyTravist;