import React from 'react'
import { Link } from 'react-router-dom'


 
const NavigationLink = ({to,bg,text,textcolor}) => {
  

  return (
   <Link to={to}  
   
   className='navlink'
   style={{background:bg , color:textcolor}} 
   
   >{text}</Link>
  )
}

export default NavigationLink