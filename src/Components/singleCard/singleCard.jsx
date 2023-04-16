import React,{useState} from "react";
import Styles from "./singleCard.module.css";
import Confetti from "react-confetti";
import soundFile from '../../assets/collectcoin.mp3';
import soundFile1 from '../../assets/notification.mp3';
import soundFile2 from '../../assets/tadaa.mp3';

function SingleCard({id,card,handelChoice,flipped,disabled,remClick}){
   const [pass,setPass]=useState(false);

   const audio = new Audio(soundFile);
   const audio1 = new Audio(soundFile1);
   const audio2 = new Audio(soundFile2);
    const handelClick=()=>{
        audio.play();
       
       if(!disabled){
        handelChoice(card);
       } 
       
      
        if(id===7){
            audio2.play();
         console.log(" well done you have decode your first clue1 ");
         setPass(!pass);
          //redirect to next clue
        }
        if(disabled===true){
            audio1.play();   
        }
    }
   
   
    return (
        <div>
         {pass &&  <Confetti wind={0.05} gravity={0.1} />}
        <div className={Styles.card }  >
         
        <div className={flipped ? Styles.flipped : null}  > 
         <img className={Styles.front}  src={card.src}  alt="cardfront" />
         <img className={Styles.back}  src="/cover.png" onClick={handelClick} alt="cardback" />
        
         
        </div>
       </div>
      </div>
    );
}
export default SingleCard;