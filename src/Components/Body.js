import React, { useState,useEffect } from 'react'
import Draggable from 'react-draggable';

export default function Body(props) {

const[disp,setDisplay]=useState("block")

// funtion to track postion of floating div
function trackPosition(pos){
    props.handlechange("");
    props.changePosition(pos);
}


// added evet listner for detecting keypress
    useEffect(()=>{
        console.log("hey")
    const keyDownHandler=event =>{
  
      if(event.key === 'Escape'){
            setDisplay('none')
            console.log("Escape pressed");
        
      } else if(event.key ==='Enter'){
        setDisplay('block')
        console.log("enter pressed");
      }
    }
    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  },[]);
  return (
    <div className='containerBody'>

     {/****************** Dragebale div created *********************/}

      <Draggable onDrag={(e,data)=>trackPosition(data)}  position={props.position}>
      <div className='floatingDiv' style={{display:disp}}>
        {/*************Ternary operator used for changeing div content according to positions************/  }
        <span className='spanFloat'>{props.toggle ? props.toggle :"Floating..."}</span>
        <span className='spanDrag'>Drag me around...</span>
      </div>
      </Draggable>
    </div>
  )
}
