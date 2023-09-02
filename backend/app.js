import express from "express";
import cors from "cors";
import 'dotenv/config';
import mongoDB from "./db.js";
const app = express();
const port = process.env.PORT || 5000;
mongoDB();

// schema
import messageSchema from "./modal/messageSchema.js";

app.get('/', (req, res) => {
    res.send('hello world')
});

app.use(cors());
app.use(express.json());

app.use('/message', async (req, res) => {
    const { name, email, message } = req.body;
    console.log(name, email, message);
    try {
        const newMessage = new messageSchema({ name, email, message });
        // this is a validation error if it meets our structure the do, else show error
        const validationError = newMessage.validateSync();
        if (validationError) {
            return res.status(400).send({ error: validationError.message })
        }
        await newMessage.save();
        return res.status(200).send({ success: "Thank you. I have happily received it."})
    } catch (error) {
        return res.status(500).send({ error: 'I have some error. Try later!'})
    }
});

app.listen(port, () => {
    console.log(`Example app listening on pot ${port}`);
});
