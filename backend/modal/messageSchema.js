import mongoose, { Schema } from "mongoose";

const message = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true }
});

const messageSchema = mongoose.model('message', message);

export default messageSchema;