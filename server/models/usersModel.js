import { Schema } from "mongoose";

const UserSchema = new Schema({
    user_type:{
        type:String,
        required:[true,"Please select a User Type"]
    },
    user_email:{
        type : String ,
        required  : [ true ,"Email is Required"],
        unique   :[true,'This Email Already Exist'],
    },
    user_password:{
        type:String,
        required: [true, "Password cannot be left empty"]
    }
})

export default UserSchema;