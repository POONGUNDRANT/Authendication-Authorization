//import
const jwt = require('jsonwebtoken');
require('dotenv').config();

const SECRET_KEY = process.env.JWT_SECRET

function generateToken(payload) {
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: '1h', // expires in 1 hour
    });
    return token;
}


module.exports = { generateToken, SECRET_KEY };