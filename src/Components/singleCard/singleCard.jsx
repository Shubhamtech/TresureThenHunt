import React,{useState} from "react";
import Styles from "./singleCard.module.css";
import Confetti from "react-confetti";

function SingleCard({id,card,handelChoice,flipped,disabled,remClick}){
   const [pass,setPass]=useState(false);

   
    const handelClick=()=>{

    
       if(!disabled){
        handelChoice(card);
       } 
       
      
        if(id===7){
         console.log(" well done you have decode your first clue1 ");
         setPass(!pass);
          //redirect to next clue
        }

    }
   
   
    return (
        <div>
       
        <div className={Styles.card }  >

        <div className={flipped ? Styles.flipped : null}  > 
         <img className={Styles.front}  src={card.src}  alt="cardfront" />
         <img className={Styles.back}  src="/cover.png" onClick={handelClick} alt="cardback" />
         {pass &&  <Confetti wind={0.05} gravity={0.1} />}
         
        </div>
       </div>
      </div>
    );
}
export default SingleCard;