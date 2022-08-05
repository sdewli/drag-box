import {React, useState} from 'react'

export default function Nav(props) {

// created two usestate to handle the change in postion and other for re rendring the comopnent after interval of time

  const [state,changeState]=useState('');
  const [time,setTime]=useState('');
  
  
  function clock(){
  const date = new Date();
  setTime(date.toLocaleTimeString());
  }
  // to refresh the component after seted time interval
  setInterval(clock,1000)
 

  // to get the selected value form the radio box 
  function handleOptionChange(e){
    props.handlechange(e.target.name);
    changeState(e.target.name);
  }
  return (
    <header>
   
      <div className='container'>
      Postion:
       <input type='radio' name='center' 
       checked={state === 'center'} onChange={handleOptionChange} />Centre
      
       <input type='radio' name='lowerRight'  
        onChange={handleOptionChange} checked={state === 'lowerRight'}/>Lower Right 
       
       <span className='time'>{time}</span>
       <span className='textColor'>
        Press ESC to hide the Window.Enter to show again.
       </span>
       
       
      </div>
    </header>
  )
}
