import User from "../models/usersModel.js"
import  Jwt  from "jsonwebtoken"

// function to create tokens 
const createToken = (_id)=>{
    return Jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d' })
}

// function to signin a user
const signInUser = async (req, res)=>{
    
    const {userEmail, userPassword} = req.body;
    try {
        const user = await User.signin(userEmail, userPassword)
        
        // create token
        const token = createToken(user._id);
        res.status(200).json({userEmail, token});
    } catch (error) {
        res.status(400).json({error:error.message})
    }


}


// function to signup a user
const signUpUser = async (req, res)=>{
   
    const {name, userType, userEmail, userPassword} = req.body;
    try {

        const user = await User.signup(name, userType, userEmail, userPassword);
        // create token
        const token = createToken(user._id);
        res.status(200).json({userEmail, token});
        
    } catch (error) {
        res.status(400).json({error: error.message});
    }
    
}


export {
    signInUser, 
    signUpUser
}