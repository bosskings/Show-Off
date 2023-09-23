import User from "../models/usersModel.js"

// function to signin a user
const signInUser = async (req, res)=>{
    res.json({mssg:"signin user"})
}


// const function to signup a user
const signUpUser = async (req, res)=>{
    const {user_type, user_email, user_password} = req.body;

    try {
        const user = await User.signup(user_type, user_email, user_password);
        res.status(200).json({user_email, user})
    } catch (error) {
        res.status(400).json({err: error.message})
        
    }
    
}


export {
    signInUser, 
    signUpUser
}