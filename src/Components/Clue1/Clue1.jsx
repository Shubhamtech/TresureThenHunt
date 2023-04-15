import React, { useState } from "react";
import Styles from "./Clie1.module.css";
import SingleCard from "../singleCard/singleCard";
import {Alert} from "@mui/material";
const CardImg=[
    // {"src":"/cover.png"},
    {"src":"/emptybox.jpg"}
    // {"src":"/tresurebox.jpg"}
]

const Clue1=()=>{
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
   //handel a choice
   const handelChoice=(card)=>{
     //console.log(card);
    
     setDisabled(towardDisabled + 1 );
     console.log(towardDisabled);
     if(towardDisabled===3){
        setDoDisable(true);
     }
     setRemainClick(remainClick-1);
     //console.log(remainClick);
     choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
   }
    return (
        <div className={Styles.conatiner} >
            <button className={Styles.button} onClick={handelCardCollection}>Start the Game</button>
            <button className={Styles.button2} onClick={restartGame}>Restart</button>
            <Alert variant="filled" severity="warning">
              alert — Remain Clicks  {remainClick}
            </Alert>
            <div className={Styles.Gridcard}>
                 
                    {cards.map( (card) => (
                        
                        <SingleCard  key={card.id} id={card.id} card={card} handelChoice={ handelChoice} flipped={card===choiceOne || card===choiceTwo}
                          disabled={doDisable} remClick={remainClick}
                        />
                    ))}
            </div>
        </div>
    );
}
export default Clue1;