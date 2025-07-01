import mongoose from "mongoose";
import { authorSchema } from "./Author.js";

const bookSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId
    },
    title: {
        type: String,
        required: true
    },
    author: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    page: {
        type: Number
    },
    author: authorSchema
    
}, {versionKey: false});

const Books = mongoose.model("books", bookSchema)

export default Books