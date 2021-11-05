import React from 'react';
import { Redirect, Route } from 'react-router';
import UseAuth from '../Hooks/UseAuth';
import'./PrivateRoute.css'

const PrivateRoute = ({children,...rest}) => {
     const {user,isLoading}=UseAuth()
     if(isLoading){
         return(
            <div className='text-center mt-4'>
                <div className="lds-hourglass"></div>
            </div>
         )
     }
   console.log(UseAuth())
    return (
        <Route
        {...rest}
        render={({ location }) =>
          user ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
           
    
    );
};

export default PrivateRoute;