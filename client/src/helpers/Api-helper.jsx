 import axios from "axios";


export const  userLogin = async (email,password)=>{

    try {
        const res = await axios.post('/user/login',{email,password});

        return res.data;
    } catch (error) {
        console.log("Login API error:", error.response?.data)
        throw new Error(error.response?.data?.message || "Unable to login");
    }


 }


export const userSignUp =  async (name,email,password)=>{
    try {
      const res = await axios.post('/user/register',{name,email,password});

      return res.data;
  } catch (error) {
    console.log("Login API error:", error.response?.data);
     throw new Error(error.response?.data?.message || "Unable to SignUp");
  }
 }



 
export const logOutUser = async ()=>{

    try {
        const res = await axios.get('/user/logout');

        return res.data;

    } catch (error) {
        throw new Error(error.response?.data?.message || "Unable to logOut");
    }
  

} 

export const authStatus = async () => {
  try {
    const res = await axios.get("/user/auth-status", {
      withCredentials: true, 
    });

    if (res.status !== 200) {
      throw new Error("Unable to authenticate");
    }

    return res.data; 
  } catch (error) {
   if (error.response?.status === 401) {
      return null; 
    }
    throw error; 
  }
};
