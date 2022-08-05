import React, { useState } from 'react';
import NavBottom from './NavBottom';
import Nav from './Nav';
import Body from'./Body';


function Home() {
  // created 2 state to handle  the change in floting box content and postion.

  const [toggle,setToggle]=useState('');
  const[position,setPosition]=useState({x:0,y:0});

  function changePosition(value){
    setPosition({x:value.x,y:value.y});
  }
  
  // created a funtion to calculate height and width to display the floating box at center and lower Right
  function change(value){
     let height1=document.querySelector(".floatingDiv").offsetHeight;
     let width1=document.querySelector(".floatingDiv").offsetWidth;
    let height=window.innerHeight-height1;
    let width=window.innerWidth-width1;

    if(value==='center'){
      setPosition({x:width/2,y:height/2});
    }else if(value==='lowerRight')
    {
      setPosition({x:width-width1/2,y:height-height1/2});
    }
    setToggle(value);  
  }

  return (
   
   <><Nav handlechange={change}/>
    <Body toggle={toggle} handlechange={change} position={position} changePosition={changePosition}/>
    <NavBottom/></>
    
  );
}

export default Home;
