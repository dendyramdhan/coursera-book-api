const jwt = require('jsonwebtoken');

// Middleware to verify token
exports.verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(403).json({ message: 'No token provided' });
  }
  jwt.verify(token.split(' ')[1], 'secretKey', (err, decoded) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to authenticate token' });
    }
    req.user = decoded; // Add the decoded user info to request object
    next();
  });
};
