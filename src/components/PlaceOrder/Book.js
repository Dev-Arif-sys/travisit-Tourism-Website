import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import UseAuth from '../../Hooks/UseAuth';
import './Book.css'

const Book = () => {
    const [tour, setTour] = useState(null)
    const{user}=UseAuth();


    const { id } = useParams()

    useEffect(() => {
        fetch(`https://immense-hamlet-03425.herokuapp.com/tours/${id}`)
            .then(res => res.json())
            .then(data => {
                setTour(data)
            })
    }, [])


    const { register, handleSubmit,reset } = useForm();
    const history=useHistory();
    const onSubmit = data => {
        data['tourKey']=tour.key;
        data['status']='pending'
        fetch(`https://immense-hamlet-03425.herokuapp.com/booking`,{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(data)
            
        }).then(res=>res.json())
        .then(data=>{
           
            if(data.insertedId){
                alert('your booking is done successfully')
                history.push('/myBooking')
                reset();
               
            }
        })

    };


    return (
        <div className='d-md-flex align-items-center'>
            <div className='book-info'>
                <img src={tour?.image} width="500" alt="" />
                <div className='book-info-layer'>
                    <div className='book-text'>
                        <h2>{tour?.name}</h2>
                        <p>{tour?.description}</p>
                    </div>
                </div>

            </div>
            <div className='book-form'>
                <h1>Book here</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='input-field' value={user?.displayName ||""} placeholder="Name" {...register("name")} />
                    <input className='input-field' value={user?.email || ""}  placeholder='Email' type='email' {...register("email")} />
                    <input className='input-field'  placeholder='Address' {...register("address")} />
                    <input className='input-field'  placeholder='Phone no' type='number' {...register("no")} />
                    <input className='input-field'  placeholder="Date" type='date' {...register("date")} />

                    <input type="submit" className='book-btn' />
                </form>
            </div>
        </div>
    );
};

export default Book;