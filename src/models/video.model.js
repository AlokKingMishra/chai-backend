import mongoose , {Schema} from "mongoose";

import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"; //it is used to paginate the data watchtimw video 

const videoSchema = new mongoose.Schema(
    {
        videoFile: 
        {
            type: String,
            required: true,
        },

        thumbnail: 
        {
            type: String,
            required: true,
        },

        title: 
        {
            type: String,
            required: true,
        },

        description : 
        {
            type: String,
            required: true,
        },

        duration : 
        {
            type: Number,
            required: true,
        },

        views : 
        {
            type: Number,
            default: 0,
        },

        isPublished : 
        {
            type: Boolean,
            default: false,
        },

        owner :
        {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    },
    {timestamps: true}
);



export const Video = mongoose.model("Video", videoSchema);