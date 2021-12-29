import React from 'react';
import { useNavigate, useLocation } from 'react-router';
import UseAuth from '../../Hooks/UseAuth';
import UseFirebase from '../../Hooks/UseFirebase';
import img  from '../../media/img/log-in.jpg'


const Login = () => {
    const {signinWithGoogle,setLoading}=UseAuth();
    const location=useLocation();
    const redirect_uri=location.state?.from ||"/home"
    const navigate=useNavigate();
    const HandlesigninWithGoogle=()=>{
        signinWithGoogle()
        .then(result=>{
            const user=result.user;
            
            navigate(redirect_uri);
            
            
        }).catch(error=>{
            console.log(error.message)
        })
        .finally(()=>{
          setLoading(false)
        })
    }
    return (
        <div className=''>
             <div className='d-md-flex align-items-center'>
            <div className='book-info'>
                <img src={img} width="500" alt="" />
                <div className='book-info-layer'>
                    <div className='book-text'>
                        <h2>Welcome Back to Travisit</h2>
                        <p>we are providing best serivces for the lifetime tourist who wants to explore the world with us. book with 2 days to avail some special offers for you. contact with our customer care services to learn more aboout our offers.</p>
                    </div>
                </div>

            </div>
            <div className='book-form'>
                <h2 className='fw-bold'>Log in here</h2>
                <button className='btn btn-secondary' onClick={HandlesigninWithGoogle}>Google sign in</button>
                
            </div>
        </div>



           
        </div>
    );
};

export default Login;