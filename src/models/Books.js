import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    page: {
        type: Number
    }
    
}, {versionKey: false});

const Book = mongoose.model("books", bookSchema)

export default Book