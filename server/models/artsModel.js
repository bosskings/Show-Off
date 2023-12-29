import mongoose from "mongoose";
const Schema = mongoose.Schema

const artsSchema = new Schema({
    art_name:{
        type:String,
        required: true
    },

    artist_name:{
        type: String,
        required:true
    },

    art_dir:{
        type: String,
        required:true
    },

    art_category:{
        type:String,
        required:true
    },

    artist_id:{
        type: String,
        required:true
    },

    art_rating:{
        type: Number,
        required:true
    },

    art_likes:{
        type:Number,
        required:true
    },

    art_description:{
        type:String,
        required:true
    }

}, {timestamps:true});

export default mongoose.model('art', artsSchema)
