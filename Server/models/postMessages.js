import mongoose from "mongoose";

const postSchema=mongoose.Schema({
    title:String,
    message:String
})

const Postmessage=mongoose.model("postmessages",postSchema);

export default Postmessage;