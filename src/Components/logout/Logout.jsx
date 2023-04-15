import React from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import styles from "./logOut.module.css";
const LogOut=()=>{
const navigate=useNavigate();
 const handelLogout=()=>{
    const auth = getAuth();
    signOut(auth).then(() => {
      console.log("logout sucessfully");
      navigate("/");
    }).catch((error) => {
      console.log(error);
    });
 }
 return (
    <div>
    <h1>logout here boy</h1>
    <button onClick={handelLogout} className={styles.button4}>Logout</button>
    </div>
 );
}
export default LogOut;