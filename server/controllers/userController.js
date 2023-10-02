import User from "../models/usersModel.js"
import  Jwt  from "jsonwebtoken"

// function to create tokens 
const createToken = (_id)=>{
    return Jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d' })
}

// function to signin a user
const signInUser = async (req, res)=>{
    
    const {user_email, user_password} = req.body;
    try {
        const user = await User.signin(user_email, user_password)
        
        // create token
        const token = createToken(user._id);
        res.status(200).json({user_email, token});
    } catch (error) {
        res.status(400).json({error:error.message})
    }


}


// function to signup a user
const signUpUser = async (req, res)=>{
   
    const {user_type, user_email, user_password} = req.body;
    try {

        const user = await User.signup(user_type, user_email, user_password);
        // create token
        const token = createToken(user._id);
        res.status(200).json({user_email, token});
        
    } catch (error) {
        res.status(400).json({error: error.message});
    }
    
}


export {
    signInUser, 
    signUpUser
}