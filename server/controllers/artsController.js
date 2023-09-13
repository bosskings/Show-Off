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


// update an art


export {getAllArts, getSingleArt, createArt}
