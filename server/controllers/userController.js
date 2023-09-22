import UserSchema from "../models/usersModel.js"

// function to signin a user
const signInUser = async (req, res)=>{
    res.json({mssg:"signin user"})
}


// const function to signup a user
const signUpUser = async (req, res)=>{
    res.json({mssg:"signup user"})
}


export {
    signInUser, 
    signUpUser
}