import React,{useState,useEffect} from 'react';
import { Link ,useHistory} from 'react-router-dom';
import UseAuth from '../../../Hooks/UseAuth';
import './Tours.css'

const Tours = () => {
    const [tours,setTour]=useState(null)
    const {setLoading}=UseAuth()
    const [productLoading,setProductLoading]=useState(true)
   
    useEffect(()=>{
        fetch('https://immense-hamlet-03425.herokuapp.com/tours')
        .then(res=>res.json())
        .then(data=>{setTour(data)
            setProductLoading(false)
        })
    },[])

    

    console.log(tours);
  
    const history=useHistory()

    const handlePlaceOrder=(id)=>{
        history.push(`tours/${id}`)
        setLoading(false)
    }
    if(productLoading){
        return(
           <div className='text-center mt-4'>
               <div className="lds-hourglass"></div>
           </div>
        )
    }
    
    return (
        <div className='my-4'>
                <h2 className='fw-bold text-danger my-4 '>Our Plans</h2>
             <div className='card-container'>
                 {
                     tours?.map(tour=>{
                         return(
                             <div className='tour-card' key={tour.name}>
                                 <div>
                                     <img src={tour?.image} alt="" />
                                 </div>
                                 <div className='card-text'>
                                     <h5>{tour?.name}</h5>
                                     <p>{tour?.description.slice(0,130)}... <a href="" className='view-btn'>see more</a></p>

                                    
                                     <button onClick={()=>handlePlaceOrder(tour._id)} className='card-btn'>book now</button>
                                
                                    
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