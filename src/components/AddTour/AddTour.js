import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';


const AddTour = () => {
    const [tours,setTour]=useState(null)
    
   
    useEffect(()=>{
        fetch('https://immense-hamlet-03425.herokuapp.com/tours')
        .then(res=>res.json())
        .then(data=>setTour(data))
    },[])
    const { register, handleSubmit,reset } = useForm();
   
    const onSubmit = data => {
        data.key=tours?.length;
        console.log(data);
        fetch(`https://immense-hamlet-03425.herokuapp.com/tours`,{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(data)
            
        }).then(res=>res.json())
        .then(data=>{
           
            if(data.insertedId){
                alert('tour added successfully')
               
                reset();
               
            }
        })
           

    };

    return (
        <div>
          <div className='d-md-flex align-items-center'>
            <div className='book-info'>
                <img src='https://i.ibb.co/N160WV8/addTour.jpg' width="500" alt="" />
                <div className='book-info-layer'>
                    <div className='book-text'>
                        <h2>Make others dream come true</h2>
                     
                    </div>
                </div>

            </div>
            <div className='book-form'>
                <h1>Add A Tour</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='input-field'  placeholder="PlaceName" {...register("name")} />
                    <input className='input-field'   placeholder='image link'  {...register("image")} />
                    <textarea className='input-field'  placeholder='description' {...register("description")} />
                    

                    <input type="submit" className='book-btn' />
                </form>
            </div>
        </div>

        </div>
    );
};

export default AddTour;