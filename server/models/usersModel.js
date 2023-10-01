import Mongoose  from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

const UserSchema = new Mongoose.Schema({
    name:{
        type:String,
        required:[true, "Name must be provided"]
    },
    user_type:{
        type:String,
        required:[true,"Please select a User Type"]
    },
    user_email:{
        type : String ,
        required  : [ true ,"Email is Required..."],
        unique   : [true,'This Email Already Exist'],
    },
    user_password:{
        type:String,
        required: [true, "Password cannot be left empty"]
    }
})

// create a static signup function
UserSchema.statics.signup = async function(name, type, email, password){
    
    // validate users input
    if(!email || !password || !type){
        throw Error("All Fields Must be filled");
    }
    
    if(!validator.isEmail(email)){
        throw Error("email is not valid!");
    }
    
    if(!validator.isStrongPassword(password)){
        throw Error('Your Password must contain atleast one lowercase letter and one uppercase letter');
    }
    
    // Check if email already exists
    const exists = await this.findOne({user_email:email});    
    if(exists){
        throw Error("Email already in use!")
    }

    // Generate salt for password hashing
    const salt = await bcrypt.genSalt(10);
    // Hash password using salt
    const hash = await bcrypt.hash(password, salt);

    // Create new user with hashed password
    const user = await this.create({name, user_type:type, user_email:email, user_password:hash})

    // Return created user
    return user

    
}

// signin users
UserSchema.statics.signin = async function(user_email, user_password){

    if(!user_email || !user_password){ //make sure email and pass are available
        throw Error("Both fields are required!");
    }
    
    const user = await this.findOne({user_email});
    
    if (!user){
        throw Error("Account does not exists")
    }

    // check if passwords match
    const match = await bcrypt.compare(user_password, user.user_password)
    if ( !match ) {
        throw Error("Password does not match the email")
    }

    return user

}



export default Mongoose.model('User', UserSchema)
