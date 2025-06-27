import mongoose from "mongoose";


async function connecteDb() {
    mongoose.connect(process.env.DB_CONNECT)
    
    return mongoose.connection
}

export default connecteDb