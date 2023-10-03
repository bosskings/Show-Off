import {signInUser, signUpUser} from "../controllers/userController.js"

import { Router } from "express";
const router = Router();


// sign up routes
router.post('/signup', signUpUser);

// sign in routes
router.post('/signin', signInUser);


export default router;