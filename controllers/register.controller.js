const registerModule = require("../models/user.models");

//Router
const registerRouter = require("express").Router();

//Register requires

registerRouter.post('/', async function (req, res) {
    try {
        const newUser = await registerModule.create(req.body);
        return res.status(201).json({
            message: 'User registered successfully',
            success: true,
            data: newUser
        });
    } catch (err) {
        return res.status(500).json({
            message: 'Error registering user',
            error: err.message
        });
    }
});

//exports
module.exports = registerRouter;