import Mongoose  from "mongoose";
import bcryptjs from "bcryptjs";
import validator from "validator";

const UserSchema = new Mongoose.Schema({
    name:{
        type:String,
        required:[true, "Name must be provided"]
    },
    userType:{
        type:String,
        required:[true,"Please select a User Type"]
    },
    userEmail:{
        type : String ,
        required  : [ true ,"Email is Required..."],
        unique   : [true,'This Email Already Exist'],
    },
    userPassword:{
        type:String,
        required: [true, "Password cannot be left empty"]
    }
})

// create a static signup function
UserSchema.statics.signup = async function(name, userType, userEmail, userPassword){
    
    // validate users input
    if(!userEmail || !userPassword || !name || !userType){
        throw Error("All Fields Must be filled..");
    }
    
    if(!validator.isEmail(userEmail)){
        throw Error("email is not valid!");
    }
    
    if(!validator.isStrongPassword(userPassword)){
        throw Error('Your Password must contain atleast one lowercase letter and one uppercase letter');
    }
    
    // Check if email already exists
    const exists = await this.findOne({userEmail});    
    if(exists){
        throw Error("Email already in use!")
    }

    // Generate salt for password hashing
    const salt = await bcryptjs.genSalt(10);
    // Hash password using salt
    const hash = await bcryptjs.hash(userPassword, salt);

    // Create new user with hashed password
    const user = await this.create({name, userType, userEmail, userPassword:hash})

    // Return created user
    return user

    
}

// signin users
UserSchema.statics.signin = async function(userEmail, userPassword){

    if(!userEmail || !userPassword){ //make sure email and pass are available
        throw Error("Both fields are required!");
    }
    
    const user = await this.findOne({userEmail});
    
    if (!user){
        throw Error("Account does not exists")
    }

    // check if passwords match
    const match = await bcryptjs.compare(userPassword, user.userPassword)
    if ( !match ) {
        throw Error("Password does not match the email")
    }

    return user

}



export default Mongoose.model('User', UserSchema)
