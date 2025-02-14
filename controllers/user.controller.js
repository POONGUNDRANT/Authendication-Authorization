const userModel = require('../models/user.models')
const { validateToken } = require('../middleware/auth.middleware');


//Router
const userRouter = require("express").Router();

//user requires all
userRouter.get('/all', async function (req, res) {
    try {
        const result = await userModel.find();
        return res.status(200).json({
            message: "User list",
            success: true,
            data: result
        });
    } catch (err) {
        return res.status(500).json({
            message: "Something went wrong",
            error: err.message
        });
    }

});



//user requires by ID
userRouter.get('/', validateToken, async function (req, res) {
    try {
        const userId = req.user.id;  // Access the user ID from decoded token data
        const user = await userModel.findById(userId);

        if (!user) {
            return res.status(404).json({
                message: "User not found",
                success: false
            });
        }

        return res.status(200).json({
            message: "User profile",
            success: true,
            data: user
        });
    } catch (err) {
        return res.status(500).json({
            message: "Something went wrong",
            error: err.message
        });
    }

});

module.exports = userRouter;

