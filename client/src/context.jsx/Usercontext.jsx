import { createContext, useContext, useEffect, useState } from "react";
import { authStatus, logOutUser, userLogin, userSignUp } from "../helpers/Api-helper";



const AuthContext = createContext(null);

export const AuthProvider = ({children})=>{

    const [user,setUser]=useState(null);
    const [isLoggedIn,setIsLoggedIn] = useState(false);

useEffect(() => {
  const fetchUserData = async () => {
    try {
      const data = await authStatus();
      console.log("Auth data", data.user);

      setUser(data.user);
      setIsLoggedIn(true);
    } catch (error) {
      console.log("User not logged in",error); 
      setUser(null);
     setIsLoggedIn(false)
    }
  };

  fetchUserData();
}, []);

    const logIn = async(email,password)=>{
    try {
       const data= await userLogin(email,password);

     if(!data){
      throw new Error("No response from server");
     }

     setUser({email:data.email,name:data.name});
     setIsLoggedIn(true);


    } catch (error) {
      console.log("Login failed",error);
      throw new Error(error.message || "Login failed");
      
    }

}

  const signUp = async(name,email,password)=>{
    try {
      
       const data = await userSignUp(name,email,password);
       if(!data){
          throw new Error("No response from server");
       }
       setUser({name:data.name,email:data.email,password:data.password});
       setIsLoggedIn(true);
    } catch (error) {
        console.log("SignUp failed",error);
       throw new Error(error.message || "signUp  failed");
    }
        
    }

    const logOut = async()=>{
    try {
      await logOutUser();

      setUser(null);
      setIsLoggedIn(false);
    } catch (error) {
      console.log("logout failed",error.message);
      
    }
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