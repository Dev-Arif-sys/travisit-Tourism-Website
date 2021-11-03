import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const authenticationINIT=()=>{
     initializeApp(firebaseConfig)
}

export default authenticationINIT