//import logo from './logo.svg';
import React, { useEffect,useState } from "react";

import Nav from "./Components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import SignUp from "./Components/signup/SignUp";
import Login from "./Components/login/Login";
import {auth} from "./firebase";
import './App.css';
import LogOut from "./Components/logout/Logout";
// import Clue1 from "./Components/Clue1/Clue1";
import ProtectedComponent from "./Components/ProtectedComponent";
function App() {
  const [userName,setUserName]=useState("");   //const [isauthenticated,setisauthenticated]=usestate("")
  useEffect(()=>{
    //to know whether the user currently logedin or not
    auth.onAuthStateChanged((user)=>{
      if(user){
        setUserName(user.displayName);
      }else{
        setUserName(""); //userissigned out
      }
      console.log(user);
    });
  },[])
  return (
    <div className="App">
    
    {/* <img src="./tresure2.jpg"  alt="logo" /> */}
    
    <BrowserRouter>
       <Nav />
      <h1>TresureThenHunt</h1>
      {/* <div className="section">
        <h1>TresureThenHunt</h1>
        <img src="./tresure2.jpg"  alt="logo" />
      </div> */}
      
      <Routes>
        <Route path="/logout" element={<LogOut />}/>
        {/* <Route path="/clue1" element={<Clue1 />}/> */}
        
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/login" element={<Login />}/>
         <Route path="/ProtectedComponent" element={<ProtectedComponent />}/> 
      </Routes>
      
    </BrowserRouter>
    {/* <img src="./tresure2.jpg"  alt="logo" /> */}
     <div className="section">
     
     </div> 
    <Footer /> 
    </div>
  );
}

export default App;
