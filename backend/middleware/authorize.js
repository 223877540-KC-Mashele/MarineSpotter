const User = require('../models/user');  // Adjust the path based on your project structure

// Middleware to authorize user based on their role
const authorize = (roles = []) => {
  return (req, res, next) => {
    User.findById(req.userId, (err, user) => {
      if (err) {
        return res.status(500).json({ message: 'Internal Server Error' });
      }
      if (!user) {
        return res.status(401).json({ message: 'User not found' });
      }

      // Check if the user's role is allowed
      if (roles.length && !roles.includes(user.role)) {
        return res.status(403).json({ message: 'Forbidden' });
      }

      next();  // User is authorized, proceed to the next middleware
    });
  };
};

module.exports = authorize;
