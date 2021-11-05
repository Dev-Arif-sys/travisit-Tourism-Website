import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import UseAuth from '../../Hooks/UseAuth';
import './MyBooking.css'

const MyBooking = () => {
    const [bookings,setBookings]=useState(null);
    const [bookedTour,setBookedTour]=useState(null)
    const {user}=UseAuth()
    const email={email:user?.email}
    useEffect(()=>{
        fetch(`https://immense-hamlet-03425.herokuapp.com/booking/byMail`,{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(email)
    })
    .then(res=>res.json())
    .then(data=>{
        setBookings(data)
        console.log()
    })
    },[user])
    

    const tourKeys=bookings?.map(booking=> booking.tourKey)
  

    useEffect(()=>{
        fetch(`https://immense-hamlet-03425.herokuapp.com/tour/byKey`,{
            method:"POST",
            headers:{
                'content-type':"application/json"
            },
            body:JSON.stringify(tourKeys)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setBookedTour(data)
        })
    },[bookings])
     
    if(bookedTour){
        bookings.filter(booking=>{
            bookedTour.filter(tour=>{
                if (booking.tourKey ==tour.key){
                    booking["tourDetails"]=tour
                }
            })
       
        })
    }

    console.log(bookings);
 const cancelTour=(id)=>{
     console.log(id)
     if(window.confirm('do you want to cancel the tour')){
        fetch(`https://immense-hamlet-03425.herokuapp.com/booking/${id}`,{
            method:"DELETE",
           }).then(res=>res.json())
           .then(data=>{
               if(data.deletedCount>0){
                   
                   const restBook=bookings.filter(booking=> booking._id !==id)
                   setBookings(restBook)
               }
           })
     }
      
 }
    


    return (
        <div className='pt-3 pb-5' >
            
            <h3 className='mb-5'>Your booking Review</h3>
            <div className="container booking-review bg-light p-5">
                 <div className='text-start mb-4'>
                     <h6>hello <span className='text-primary'> {user?.displayName}</span>.you booked these tours </h6>
                   
                 </div>
                 
                 <div>
                 <Table Table responsive="sm" hover>
  <thead>
    <tr>
      <th>image</th>
      <th>place name</th>
      <th>Date</th>
      
    </tr>
  </thead>
  <tbody>
      {
          bookings?.map(booking=>{
              return(
                <tr key={booking._id}>
                
                <td>  <img src={booking?.tourDetails?.image} width="50" alt="" />  </td>
                <td>{booking?.tourDetails?.name}</td>
                <td>{booking?.date}</td>
                <td><button className="btn btn-secondary" onClick={()=>cancelTour(booking?._id)}>cancel</button></td>
              </tr>
              )
          })
      }
  

  </tbody>
</Table>
                 </div>
            </div>
            
        </div>
    );
};

export default MyBooking;