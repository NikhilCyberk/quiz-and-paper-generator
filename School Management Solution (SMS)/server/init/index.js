const mongoose = require("mongoose");
const initData = require("./data.js");
const Mcqs = require("../models/mcqs.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/Question_2";

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

const initDB = async () => {
    // await mcqs.deleteMany({});
    await Mcqs.insertMany(initData.data);
    console.log("data was initialized");
};

initDB();