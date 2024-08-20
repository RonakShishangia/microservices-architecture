const jwt = require('jsonwebtoken');

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || "your_jwt_secret"

// function authenticateToken(req, res, next) {
const authenticateToken = async (req, res, next) => {
    // Get the token from the Authorization header
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer <token>

    if (!token) {
        return res.status(401).json({ message: 'Access denied, token missing!' });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, ACCESS_TOKEN_SECRET);
        console.log("🚀 ~ authenticateToken ~ decoded:", decoded)
        req.user = decoded; // Store the decoded user info in req.user
        next(); // Proceed to the next middleware/route handler
    } catch (err) {
        console.log("🚀 ~ authenticateToken ~ err:", err)
        res.status(403).json({ message: 'Invalid token!' });
    }
}

module.exports = {
    authenticateToken
};
