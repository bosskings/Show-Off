import Art from "../models/artsModel.js"
import mongoose from "mongoose";

// get all arts
const getAllArts =  async (req, res) =>{
    const arts = await Art.find({}).sort({createdAt: -1});

    res.status(200).json(arts);
};

// get a single art
const getSingleArt = async (req, res)=>{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"Invalid Art request"})
    }

    const art = await Art.findById(id)
    if(!art){
        return res.status(404).json({error:"Art not found"})
    }
    res.status(200).json(art)
}

//create an art
const createArt = async (req, res)=>{
    const {art_name, artist_name, art_rating, artist_id, art_dir, art_description} = req.body;

    try {
        const art = await Art.create({art_name, artist_name, art_rating, artist_id, art_dir, art_description})
        res.status(200).json(art)
    } catch (error) {        
        res.status(400).json({error: error.message})    
    }
}

// delete an art
const deleteArt = async (req,res)=>{
    const id = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: "Invalid art request"})
    }
    const art = await Art.findOneAndDelete({_id: id})

    if(!art){
        res.status(404).json({error: "art not found"})
    }

    res.status(200).json(art)
}


// update an art
const updateArt = async (req, res)=>{
    try {
        
        const {id} = req.params
    
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({error: "Invalid art request"})
        }
    
        const art = await Art.findOneAndUpdate({_id:id}, {...req.body})
    
        if(!art){
           return res.status(404).json({error: "art not found"})
        }
    
        res.status(200).json(art)
    } catch (err) {
        console.log(err.message)
    }

};



export {
    getAllArts, 
    getSingleArt, 
    createArt, 
    deleteArt, 
    updateArt
}
