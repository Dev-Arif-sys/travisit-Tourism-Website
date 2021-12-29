import React from 'react';
import { Redirect, Route,Navigate,useLocation } from 'react-router';
import UseAuth from '../Hooks/UseAuth';
import'./PrivateRoute.css'

const PrivateRoute = ({children,...rest}) => {
     const {user,isLoading}=UseAuth()
     const location=useLocation()
     if(isLoading){
         return(
            <div className='text-center mt-4'>
                <div className="lds-hourglass"></div>
            </div>
         )
     }
   console.log(UseAuth())
   return user ? children : <Navigate to='/login' state={{from:location}} replace/>
    
};

export default PrivateRoute;