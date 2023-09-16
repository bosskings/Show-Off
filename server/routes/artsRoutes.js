import { 
    createArt, 
    deleteArt, 
    getAllArts, 
    getSingleArt, 
    updateArt 
} from "../controllers/artsController.js"
import { Router } from "express";

const router = Router()

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