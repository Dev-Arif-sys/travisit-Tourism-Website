import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Tours.css'

const Tours = () => {
    const [tours,setTour]=useState(null)
   
    useEffect(()=>{
        fetch('http://localhost:5000/tours')
        .then(res=>res.json())
        .then(data=>setTour(data))
    },[])
  
    
    return (
        <div>
             <h3>our plans {tours?.length}</h3>
             <div className='card-container'>
                 {
                     tours?.map(tour=>{
                         return(
                             <div className='tour-card' key={tour.name}>
                                 <div>
                                     <img src={tour.image} alt="" />
                                 </div>
                                 <div className='card-text'>
                                     <h5>{tour.name}</h5>
                                     <p>{tour.description.slice(0,130)}... <a href="" className='view-btn'>see more</a></p>

                                     <Link to={`tours/${tour._id}`}>
                                     <button className='card-btn'>book now</button>
                                
                                     </Link>
                                     </div>
                                 
                             </div>
                         )
                     })
                 }
             </div>
        </div>
    );
};

export default Tours;