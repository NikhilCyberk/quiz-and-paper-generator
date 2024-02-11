const express = require('express');

const mongoose = require('mongoose');
const quizzes = require("./models/mcqs");


const cors = require('cors');
const app = express();

const MONGO_URL = "mongodb://127.0.0.1:27017/Question";

app.use(cors());
app.use(express.json());

main()
    .then(() => {
        console.log("connected to DB");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

app.get("/home", async (req, res) => {
    try {
        const ques = await quizzes.find({});
        res.json(ques);
        console.log(ques);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});


app.get("/msg", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.listen(5000, () => {
    console.log(`Server is running on port 5000.`);
});
