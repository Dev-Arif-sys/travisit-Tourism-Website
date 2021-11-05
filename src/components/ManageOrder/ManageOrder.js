import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './ManageOrder.css';

const ManageOrder = () => {
    const [Allbooking, setAllBooking] = useState(null)
    const [bookedTour, setBookedTour] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const [isbutton,setButton]=useState(true)

    useEffect(() => {
        fetch('https://immense-hamlet-03425.herokuapp.com/booking')
            .then(res => res.json())
            .then(data => {
                setAllBooking(data);
            })

    }, [])

    const tourKeys = Allbooking?.map(booking => booking.tourKey)
    useEffect(() => {
        fetch(`https://immense-hamlet-03425.herokuapp.com/tour/byKey`, {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(tourKeys)
        })
            .then(res => res.json())
            .then(data => {

                setBookedTour(data)
                setLoading(false)
            })
    }, [Allbooking])


    if (bookedTour) {
        Allbooking.filter(booking => {
            bookedTour.filter(tour => {
                if (booking.tourKey == tour.key) {

                    booking["tourDetails"] = tour
                }
            })

        })
    }

    if (isLoading) {
        return (
            <div className='text-center mt-4'>
                <div className="lds-hourglass"></div>
            </div>
        )
    }

    const handleDelete=(id)=>{
        console.log(id)
        if(window.confirm("are you sure to delete the booking")){
            fetch(`https://immense-hamlet-03425.herokuapp.com/booking/${id}`,{
                method:"DELETE",
               }).then(res=>res.json())
               .then(data=>{
                   if(data.deletedCount>0){
                       
                       const restBooking=Allbooking.filter(booking=> booking._id !== id)

                       setAllBooking(restBooking)
                    
                   }
               })
        }
        
    }

    const handleApprove=(id)=>{
        const approve={status:"approved"}
        fetch(`https://immense-hamlet-03425.herokuapp.com/booking/${id}`,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(approve)
        })
        const approveBooking=Allbooking.find(booking=>booking._id==id)
        
        approveBooking.status='approved'
        const restBooking=Allbooking.filter(booking=>booking._id!==id)
        const updateBooking=[approveBooking,...restBooking];
        setAllBooking(updateBooking)
    }

    console.log(Allbooking)

    return (
        <div className='py-4'>
            <h2 className='fw-bold text-danger'>All Bookings</h2>
            {
                Allbooking?.map(booking => {
                  
                    return (

                        <div key={booking._id} className='d-md-flex container bookingDetail  justify-content-around mb-4 rounded'>
                            <div className='tour-info'>
                                <h4>Tour Details</h4>
                                <div className='text-start'>
                                    <img src={booking?.tourDetails?.image} alt="" />
                                    <h6 className='fw-bold text-primary py-3'>{booking?.tourDetails.name}</h6>
                                    <p>{booking?.tourDetails.description}</p>
                                </div>
                            </div>
                            <div className="tourist-info">
                                <h4>Tourist Info</h4>
                                <div className='text-end'><button className='pending'>{booking.status}</button></div>
                                <div>
                                    <h6 className='fw-bold text-primary py-3'>{booking?.name}</h6>
                                    <Table className='table'   size="lg">
                                        <thead>

                                        </thead>
                                        <tbody>
                                            <tr>
                                                
                                                <td className="fw-bold">name:</td>
                                                <td>{booking.name}</td>

                                            </tr>

                                            <tr>
                                                
                                                <td className="fw-bold" >email:</td>
                                                <td>{booking.email}</td>

                                            </tr>

                                            <tr>
                                                
                                                <td className="fw-bold" >Address:</td>
                                                <td>{booking.address}</td>


                                            </tr>
                                            <tr>
                                                
                                                <td className="fw-bold"  >Phone No:</td>
                                                <td>{booking.no}</td>

                                            </tr>
                                            <tr>
                                                
                                                <td className="fw-bold" >Date:</td>
                                                <td>{booking.date}</td>

                                            </tr>



                                        </tbody>
                                    </Table>
                                    <div className='py-4 text-start'>
                                        <button onClick={()=>handleDelete(booking._id)} className="btn btn-primary">Delete</button>
                                        {
                                            booking.status=='pending' &&  <button onClick={()=>handleApprove(booking._id)} className="btn btn-secondary ms-2">Approve</button>
                                        }
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default ManageOrder;