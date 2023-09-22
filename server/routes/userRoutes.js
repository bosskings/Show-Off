import {signInUser, signUpUser} from "../controllers/userController.js"

import { Router } from "express";
const router = Router();



// sign up routes 
// router.get('/signup', signUpUser);
router.post('/signup', signUpUser);

// sign in routes
// router.get('/signin', signInUser);
router.post('/signin', signInUser);


export default router;