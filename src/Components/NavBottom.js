import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Footer() {
  // to naviagte to page to through button click.
  const navigate=useNavigate();
  return (
    < >
    <footer className='containerFooter'>  
    <button className='btn'onClick={()=>navigate('/page2')}>
      Go to page 2 </button> </footer>
    </>     
  )
}
