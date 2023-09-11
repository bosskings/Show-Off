import { Router } from "express";
const router = Router()

// GET methods
router.get('/galleryArts', (req,res)=>{
    res.status(201).json({id: "001"})
});


// POST methods

// PUT methods

// DELETE methods


// avoid wrong routes
router.all('*', (req, res)=>{
    res.send('Wrong route..')
});


export default router