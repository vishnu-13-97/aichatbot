import { createContext, useContext, useEffect, useState } from "react";



const AuthContext = createContext(null);

export const AuthProvider = ({children})=>{

    const [user,setUser]=useState(null);
    const [isLoggedIn,setIsLoggedIn] = useState(false);


    useEffect(()=>{
    
          

    },[])

    const logIn = async(email,password)=>{
     

    }

  const signUp = async(name,email,password)=>{
     
        
    }

    const logOut = async()=>{

    }

const value = {
    user,
    isLoggedIn,
    logIn,
    logOut,
    signUp
}
return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>

}

export const useAuth =()=> useContext(AuthContext); 