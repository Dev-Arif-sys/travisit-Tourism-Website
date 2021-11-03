import React from 'react';
import './Tourtype.css'


const Tourtype = () => {
    return (
        <div className='container d-md-flex justify-content-around py-5'>
            
            <div className='d-flex tour-type'>
                <div>
                    <img src='https://i.ibb.co/bFB7whz/icon-around.png' width='50' alt="" />
                </div>
                <div>
                    <h4 className="tour-heading">World Tour</h4>
                    <p>We are offering best packages and safety tools for your dream tour and journey. travel the world , recover the fear with us to climb in </p>
                    <div>
                        <a className="view-btn" href="">view more</a>
                    </div>
                </div>
            </div>

            <div className='d-flex tour-type'>
                <div>
                    <img src='https://i.ibb.co/T1JQRVH/icon-boat.png' width='50' alt="" />
                </div>
                <div>
                    <h4 className="tour-heading">Cruisses</h4>
                    <p>Are you want to join the cruise trip. do you fear to be in the cruise trip. don'nt fear come with us to have an excellent journey to add experience in your diary </p>
                    <div>
                        <a className="view-btn" href="">view more</a>
                    </div>
                </div>
            </div>


            <div className='d-flex tour-type'>
                <div>
                    <img src='https://i.ibb.co/kx0nRcS/icon-landmark.png' width='50' alt="" />
                </div>
                <div>
                    <h4 className="tour-heading">Best tour</h4>
                    <p>We are giving best  away best tour  at a lucrative prices if you want a great journey conteact us with  </p>
                    <div>
                        <a className="view-btn" href="">view more</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tourtype;