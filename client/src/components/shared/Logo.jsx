import { Typography } from '@mui/material'
import React from 'react'

import {Link} from "react-router-dom"
const Logo = () => {
  return (
   <div style={{
    display:"flex", marginRight:"auto",
    alignItems:"center",
    gap:"15px"
   }}>

    <Link to={'/'}>
    <img src='logo2.png' alt='logo' width={'30px'} height={'30px'}  className='image-inverted' />
   
    </Link>

 <Typography sx={{display:{md:"block",sm:"none",xs:"none"},marginRight:"auto",fontWeight:"800",textShadow:"2px 2px 20px #000"}}>

<span style={{fontSize:'20px'}}>MERN</span>-Bot
    </Typography>
   </div>
  )
}

export default Logo