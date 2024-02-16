const express = require('express');
const passport = require('passport');
const router = express.Router();
const adminUser = require("../models/adminSchema");

// ... (other routes)


router.post('/signup', async (req, res) => {
    try {
        let { username, email, password, schoolName } = req.body;
        let newUser = new adminUser({ email, username, schoolName });
        const registerUser = await adminUser.register(newUser, password);
        console.log(registerUser, username, email, password, schoolName);
        res.json({ message: 'Signup successful', user: newUser });
    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});







// If this function gets called, authentication was successful.
// `req.user` contains the authenticated user.

// router.post('/login', (req, res, next) => {
//     let { email, password } = req.body;
//     console.log(email, password);
//     passport.authenticate("local", {
//         failureRedirect: "login",
//         failureFlash: "true",
//     })
// });

router.post('/login', passport.authenticate("local", {
    failureRedirect: "login",
    // failureFlash: "true",
}), async (req, res) => {
    res.send('/admin-dashboard');
    // res.json({ message: "Hello from login!" });
});


module.exports = router;