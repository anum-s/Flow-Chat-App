import jwt from 'jsonwebtoken';
import User from "../Models/authuser.model.js";

export const isLogin = async(req,res,next)=>{
    try {
     const token = req.cookies.jwt
     if(!token) return res.status(401).json({success:false,message: "User Unauthorized"})
     const decode = jwt.verify(token,process.env.JWT_SECRET)
     if(!decode) return res.status(500).json({success:false,message: "Invalid Token"})
     const user = await User.findById(decode.userId).select("-password")
     if(!user) return res.status(500).json({success:false,message: "User Not Found"})
    req.user = user,
    next()
        
    } catch (error) {
        res.status(500).json({success:false,message: error.message})
    }
}

export default isLogin