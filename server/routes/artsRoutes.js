import { Router } from "express";
import { 
    createArt, 
    deleteArt, 
    getAllArts, 
    getSingleArt, 
    updateArt 
} from "../controllers/artsController.js"

import usersAuth from "../middleware/usersAuth.js";

const router = Router()

// use authorization middleware for all routes
router.use(usersAuth)

// GET all arts 
router.get('/galleryArts', getAllArts);

// GET single art
router.get('/galleryArts/:id', getSingleArt)

// POST a new art
router.post('/uploadArt', createArt)

// UPDATE arts
router.patch('/updateArt/:id', updateArt)

// DELETE arts
router.delete('/removeArt/:id', deleteArt)

// avoid wrong routes
router.all('*', (req, res)=>{
    res.status(404).send('Wrong route..')
});


export default router