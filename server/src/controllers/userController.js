const User = require("../models/userModel");
const { generateToken } = require("../utils/jwt");
const {signupvalidator, loginValidator } = require("../utils/validators");

const register = async (req, res) => {
     const { error, value } = signupvalidator.validate(req.body, { abortEarly: false });

    if (error) {
        return res.status(400).json({
            success: false,
            errors: error.details.map(err => err.message)
        });
    }

    const { name, email, password } = value;

  try {
   

    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      console.log("User Already registered");

      return res.status(400).json({
        success: false,
        message: "User already registered",
      });
    }

    const user = new User({ name, email, password });
    

    await user.save();

      res.clearCookie(process.env.COOKIE_NAME, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    signed: true
  });

   
    const token = generateToken({id:user._id,email:user.email});

   res.cookie(process.env.COOKIE_NAME, token, {
      httpOnly: true,  
      secure: process.env.NODE_ENV === "production", 
      sameSite: "strict", 
      path:"/",
      maxAge: 60 * 60 * 24 * 1000 * 7 ,
       signed: true
    });




    res.status(201).json({
      user: user,
      success: true,
      message: "User Registered Successfully",
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const login = async (req,res)=>{
// const { error, value } = loginValidator.validate(req.body, { abortEarly: false });

    // if (error) {
    //     return res.status(400).json({
    //         success: false,
    //         errors: error.details.map(err => err.message)
    //     });
    // }

    const { email, password } = req.body;
  try {

    const user = await User.findOne({email:email});

    if(!user){
      return res.status(401).json({
        success:false,
        message:"email not registered"
      })
    }
    
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid password"
      });
    }
  
  res.clearCookie(process.env.COOKIE_NAME, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    signed: true
  });

   
    const token = generateToken({id:user._id,email:user.email});

   res.cookie(process.env.COOKIE_NAME, token, {
      httpOnly: true,  
      secure: process.env.NODE_ENV === "production", 
      sameSite: "strict", 
      path:"/",
      maxAge: 60 * 60 * 24 * 1000 * 7 ,
       signed: true
    });


    res.status(200).json({
       message:"user logged in",
      id:user._id,
      name:user.name,
      email:user.email,
   

    })


  } catch (error) {
   console.log("error", error);
    res.status(500).json({
      message: "Internal server error",
    });
    
  }
}

const getAllusers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({
      users: users,
      success: true,
      message: "Users fetched successfully",
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};


const getUserData = async(req,res)=>{
 try {
  const user = User.findById(req.user.id).select('-password');
     if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.json({
      success: true,
      user:req.user,
    })
 } catch (error) {
      console.log(error);
    return res.status(200).json({ message: "ERROR", cause: error.message });

 }
}

const logOutuser = async (req, res) => {
  try {
    res.clearCookie(process.env.COOKIE_NAME, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      signed: true,
      path: "/",
    });

    return res.status(200).json({
      success: true,
      message: "User logged out successfully",
    });
  } catch (error) {
    console.log("Logout error", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error during logout",
    });
  }
};


module.exports = {
  register,
  getAllusers,
  login,
  logOutuser,
  getUserData
};
