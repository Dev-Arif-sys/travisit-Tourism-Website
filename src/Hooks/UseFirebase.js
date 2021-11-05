import { GoogleAuthProvider,getAuth,signInWithPopup,onAuthStateChanged,signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import authenticationINIT from "../Firebase/Firebase.init";


authenticationINIT();
const UseFirebase=()=>{
     const [user,setUser]=useState(null)
     const [isLoading,setLoading]=useState(true)

    const googleProvider= new GoogleAuthProvider();
    const auth=getAuth();

    const signinWithGoogle=()=>{
        setLoading(true)
       return  signInWithPopup(auth,googleProvider)
       
    }

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
            setUser(user)
            setLoading(false)
            }else{
             setUser()
            }
        })

    },[])


    const logOut=()=>{
        signOut(auth).then(()=>{
            setUser()
        }).catch(error=>{
            console.log(error.message)
        })
    }


    return{
        signinWithGoogle,
        user,
        logOut,
        isLoading,
        setLoading
    }


   

}

export default UseFirebase;