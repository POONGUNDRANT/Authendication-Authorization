//Environment variables
require('dotenv').config();

// import packages
const express = require("express");
const userController = require("./controllers/user.controller");
const authController = require("./controllers/auth.controller");
const { validateToken } = require("./middleware/auth.middleware");
const registerController = require("./controllers/register.controller");
const { createDbConnection } = require("./dbConnection");


// Create a database connection
createDbConnection();

//Create a API server
const APIServer = express();

//passing incoming request body as a json
APIServer.use(express.json());

//controllers injections
APIServer.get('/', function (req, res) {
    return res.status(200).json({
        message: `Welcome to my user API \n 1) Register the user first i) userName ii) email iii) password \n 2) Login the user \n 3) view the user i) use token to get particular user ii) use '/all' to get all users`,
    });
});
APIServer.use("/users", userController);
APIServer.use("/login", authController);
APIServer.use("/register", registerController);

//Start and listen the server

APIServer.listen(process.env.PORT, process.env.HOSTNAME, () => {
    console.log("Server is running on port 3000");
    console.log(`http://${process.env.HOSTNAME}:${process.env.PORT}`);
});
