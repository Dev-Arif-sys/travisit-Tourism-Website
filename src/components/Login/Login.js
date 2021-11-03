import React from 'react';
import UseAuth from '../../Hooks/UseAuth';
import UseFirebase from '../../Hooks/UseFirebase';


const Login = () => {
    const {signinWithGoogle}=UseAuth();
    return (
        <div className='py-5'>
           <button className='btn btn-secondary' onClick={signinWithGoogle}>Google sign in</button>
        </div>
    );
};

export default Login;