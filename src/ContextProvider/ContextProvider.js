import React, { createContext } from 'react';
import UseFirebase from '../Hooks/UseFirebase';

export const AuthContext=createContext()

const ContextProvider = ({children}) => {
    const Auth=UseFirebase()
    return (
       <AuthContext.Provider value={Auth}>
        {children}
       </AuthContext.Provider>
    );
};

export default ContextProvider;