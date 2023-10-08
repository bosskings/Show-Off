import Jwt from 'jsonwebtoken';
import User  from '../models/usersModel.js'

const usersAuth = async (req, res, next) =>{  

    // very authentication
    const { authorization } = req.headers;

    if (!authorization) {
        res.status(404).json({error:"Authentication token is requried"})
    }else{

        const token = authorization.split(' ')[1];
        // verify jwt
        try {
            const {_id} = Jwt.verify(token, process.env.SECRET)
    
            req.user = await User.findOne({_id}).select('_id');
            next();
    
        } catch (error) {
            console.log(error);
            res.status(400).json({error:"Unauthorized request"})
        }
    }




}

export default usersAuth;