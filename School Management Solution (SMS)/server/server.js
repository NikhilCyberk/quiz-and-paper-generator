const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require("dotenv")
const Routes = require("./routes/route.js")

const quizzes = require("./models/mcqs");
const app = express();
const PORT = process.env.PORT || 8000

const passport = require("passport");
const localStrategy = require("passport-local");
const adminUser = require("./models/adminSchema.js");

const cookiesParser = require("cookie-parser");

const session = require("express-session");

const userRouter = require("./routes/route.js");





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

app.use(cookiesParser());




const sessionoptions = {
    // store,
    // secret: process.env.SECRET,
    secret: "secretcode",
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000, //cookies expires after 1 week
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    },
};

app.use(session(sessionoptions));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(adminUser.authenticate()));

passport.serializeUser(adminUser.serializeUser());
passport.deserializeUser(adminUser.deserializeUser());



// creating demo user
// app.get("/demouser", async (req, res) => {
//     let fakeUser = new adminUser({
//         email: "xyz@mail.com",
//         username: "xyz",
//         schoolName: "demoschool",

//     });
//     let newUser = await adminUser.register(fakeUser, "demopasword");
//     res.send(newUser);
// });





// app.get("/home", async (req, res) => {
//     try {
//         const ques = await quizzes.find({});
//         res.json(ques);
//         // console.log(ques);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send("Server Error");
//     }
// });


// app.get("/msg", (req, res) => {
//     res.json({ message: "Hello from server!" });
// });

app.use("/", userRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port 5000.`);
});
