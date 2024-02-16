const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const adminSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    }, //pasport will automatically add username and password
    role: {
        type: String,
        default: "Admin"
    },
    schoolName: {
        type: String,
        unique: true,
        required: true
    }
});

// this add username and password AND provide hashing and salting
adminSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("admin", adminSchema)