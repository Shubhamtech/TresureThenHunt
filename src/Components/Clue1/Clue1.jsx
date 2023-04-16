import React, { useState } from "react";
import { positions } from '@mui/system';
import Styles from "./Clie1.module.css";
import SingleCard from "../singleCard/singleCard";
import {Alert,Avatar,Stack} from "@mui/material";
import { deepOrange } from '@mui/material/colors';
import { getDatabase, ref, set } from "firebase/database";
const CardImg=[
    // {"src":"/cover.png"},
    {"src":"/emptybox.jpg"}
    // {"src":"/tresurebox.jpg"}
]

const Clue1=(props)=>{
   const [cards,setCards]=useState([]);
   const [turns,setTurns]=useState(0);
   const  [choiceOne,setChoiceOne]=useState(null);
   const  [choiceTwo,setChoiceTwo]=useState(null);
   const [towardDisabled,setDisabled]=useState(0);
   const [doDisable,setDoDisable]=useState(false);
   const [remainClick,setRemainClick]=useState(4);
   
   const handelCardCollection=()=>{
    const cardCollection=[...CardImg, ...CardImg, ...CardImg, ...CardImg, ...CardImg, ...CardImg,{"src":"/tresurebox.jpg"} , ...CardImg, ...CardImg, ...CardImg, ...CardImg,...CardImg]
    .map((card,index)=> ({...card, id:index+1}));

   setCards(cardCollection);
    setTurns(0);
   }
   const restartGame=()=>{
    window.location.reload(false);
   }
  // console.log(cards,turns);
  const userName=props.userName;
  const email=props.userEmail;
  const userId=props.userId;
  console.log(userId);

    function writeUserData() {
      const db = getDatabase();
     set(ref(db, 'users/' + userId), {
       username:userName,
       email: email,
        currlevel:1,
        status:'pending'

      });
    }
   writeUserData();
   const handelChoice=(card)=>{
     //console.log(card);
    
     setDisabled(towardDisabled + 1 );
     console.log(towardDisabled);
     if(towardDisabled===3){
        setDoDisable(true);
     }
     setRemainClick(remainClick-1);
    //  if(remainClick===0){
    //     audio1.play();
    //  }
     //console.log(remainClick);
     choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
   }
   const Uname=props.userName;
    return (
        <div className={Styles.conatiner} >
           <Alert variant="filled" severity="info">
              You have Remaining Choices  {remainClick}    <span><h3>your current level:-</h3></span>
            </Alert>
            <div className={Styles.buttons}>
               <button className={Styles.button} onClick={handelCardCollection}>Start the Game</button>
                <button className={Styles.button2} onClick={restartGame}>Restart</button>
            </div>
            
            <Stack direction="row" alignItems="center" gap={1} positions="right">
                <h3> Welcome! {props.userName} </h3>
                <Avatar sx={{ bgcolor: deepOrange[500] }}>{Uname.substr(0,2)}</Avatar>
            </Stack>
           
            <div className={Styles.Gridcard}>
                 
                    {cards.map( (card) => (
                        
                        <SingleCard  key={card.id} id={card.id} card={card} handelChoice={ handelChoice} flipped={card===choiceOne || card===choiceTwo}
                          disabled={doDisable} remClick={remainClick} userIdd={userId}
                        />
                    ))}
            </div>
        </div>
    );
}
export default Clue1;