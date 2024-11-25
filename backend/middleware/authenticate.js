const jwt = require('jsonwebtoken');
const User = require('../models/user');  // Adjust the path based on your project structure

// Middleware to authenticate the user via JWT
const authenticate = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];  // Get token from Authorization header
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  jwt.verify(token, 'your_jwt_secret', async (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid or expired token' });
    }

    // Attach the userId to the request object
    req.userId = decoded.userId;
    next();  // Proceed to the next middleware
  });
};

module.exports = authenticate;
