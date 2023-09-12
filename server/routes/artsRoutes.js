import { Router } from "express";
const router = Router()

// GET all arts 
router.get('/galleryArts', (req,res)=>{
    res.status(201).json({msg: "here's all the arts from db"})
});

// GET single art
router.get('/galleryArts/:id', (req, res)=>{
    res.json({msg: "here's your single art"})
})

// POST a new art
router.post('/uploadArt', (req, res)=>{
    const {art_name, file_dir, description} = req.body;
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
    res.status(404).send('Wrong route..')
});


export default router