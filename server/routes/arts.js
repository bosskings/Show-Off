import { Router } from "express";
const router = Router()

// GET all arts 
router.get('/galleryArts', (req,res)=>{
    res.status(201).json({msg: "here's all the arts from db"})
});

// get signle art
router.get('/galleryArts/:id', (req, res)=>{
    res.json({msg: "here's your single art"})
})


// POST a new art
router.post('/uploadArt', (req, res)=>{
    res.json({msg: "received your art"})
})

// UPDATE arts
router.patch('/updateArt/:id', (req, res)=>{
    res.json({msg: "Scheduled for update"})
})

// DELETE arts
router.delete('/removeArt/:id', (req, res)=>{
    res.json({msg: "removed an art"})
})

// avoid wrong routes
router.all('*', (req, res)=>{
    res.send('Wrong route..')
});


export default router