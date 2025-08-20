import { AppBar, Toolbar } from '@mui/material'
import React from 'react'
import Logo from './shared/Logo'
import { useAuth } from '../context.jsx/Usercontext'
import NavigationLink from './shared/NavigationLink'

const Header = () => {

  const {isLoggedIn ,logOut}= useAuth();
  return (
   
    <AppBar sx={{bgcolor:"transparent",position:"static",boxShadow:"none"}}>
        <Toolbar sx={{display:"flex"}}>
          <Logo/>
          <div>
{isLoggedIn ?  

<>
<NavigationLink bg="#00fffc" to='/chats' text='Go to Chat' textcolor='black'/>
<NavigationLink bg='#51538f' to='/' text='LogOut' textcolor='white' onclick={logOut} />
</>

: <>
<NavigationLink bg="#00fffc" to='/login' text='login' textcolor='black'/>
<NavigationLink bg='#51538f' to='/signup' text='SignUp' textcolor='white' />
</>}
          </div>
        </Toolbar>
    </AppBar>
  )
}

export default Header