import React from 'react'
import { Link } from 'react-router-dom'


 
const NavigationLink = ({to,bg,text,textcolor,onClick}) => {
  

  return (
   <Link to={to}  
   
   className='navlink'
   style={{background:bg , color:textcolor}} 
   onClick={onClick}
   >{text}</Link>
  )
}

export default NavigationLink