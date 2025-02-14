const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require("../jwt.utils")

function validateToken(req, res, next) {
    try {
        if (req.headers['token']) {
            const isvalid = jwt.verify(req.headers['token'], SECRET_KEY);
            if (isvalid) {
                req.user = isvalid;  // Attach decoded token data to req.user
            next();
            }
        } else {
            return res.status(403).json({
                message: 'Token is missing',
            });
        }
    } catch (err) {
        return res.status(401).json({
            message: 'Token is invalid or expired',
            error: err.message,
        });
    }

}
    
module.exports = { validateToken };