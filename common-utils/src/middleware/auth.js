const jwt = require('jsonwebtoken');

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || "your_jwt_secret"

function authenticateToken(req, res, next) {
    console.log("authenticateToken...")
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.status(401).json({message: "Authorization is required..."}); // Unauthorized

    jwt.verify(token, ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.status(403).json({message: err.message}); // Forbidden
        req.user = user;
        next();
    });
}

module.exports = {
    authenticateToken
};
