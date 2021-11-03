import { GoogleAuthProvider,getAuth,signInWithPopup,onAuthStateChanged,signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import authenticationINIT from "../Firebase/Firebase.init";


authenticationINIT();
const UseFirebase=()=>{
     const [user,setUser]=useState(null)

    const googleProvider= new GoogleAuthProvider();
    const auth=getAuth();

    const signinWithGoogle=()=>{
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            const user=result.user;
            console.log(user)
        })
    }

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
            setUser(user)
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
        logOut
    }


   

}

export default UseFirebase;