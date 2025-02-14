const { generateToken } = require("../jwt.utils");
const bcrypt = require('bcryptjs');
const User = require('../models/user.models');

//Router
const authRouter = require("express").Router();

//LogIn requires
authRouter.post('/', async function (req, res) {
    try {
        const { email, userName, password } = req.body;

        // Get data from server
        const user = await User.findOne({ 
            $or: [{ userName }, { email }]
         });

        // Check if user exists
        if (!user) {
            return res.status(401).json({
                message: 'Invalid credentials',
            });
        }

        // Compare passwords
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (isPasswordValid) {
            return res.status(200).json({
                token: generateToken({ id: user._id, username: user.userName }),
                message: 'User logged in successfully',
            });
        } else {
            return res.status(401).json({
                message: 'Invalid credentials',
            });
        }

    } catch (err) {
        return res.status(500).json({
            message: 'Server error',
            error: err.message,
        });
    }
});

module.exports = authRouter;
