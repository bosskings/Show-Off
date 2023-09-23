import Mongoose  from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new Mongoose.Schema({
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

// create a static signup function
UserSchema.statics.signup = async function(type, email, password){
    
    // Check if email already exists
    const exists = await this.findOne({email});

    if(exists){
        throw Error("Email already in use!")
    }
    // Generate salt for password hashing
    const salt = await bcrypt.genSalt(10);
    // Hash password using salt
    const hash = await bcrypt.hash(password, salt);

    // Create new user with hashed password
    const user = await this.create({user_type:type, user_email:email, user_password:hash})
    // console.log(user);
    // Return created user
    return user

    
}

export default Mongoose.model('User', UserSchema)
