import mongoose from "mongoose";
import 'dotenv/config'

const mongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("connected to MongoDB");
    } catch (error) {
        console.log("It's an error")
    }
}

export default mongoDB; 