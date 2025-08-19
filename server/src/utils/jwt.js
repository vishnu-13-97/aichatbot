const jwt = require('jsonwebtoken');

require('dotenv').config();

const JWT_EXPIRES_IN = '1h'; 


const generateToken = (payload) => {
  return jwt.sign(payload,process.env.JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
};


const verifyToken = (token) => {
  return jwt.verify(token, JWT_SECRET);
};

module.exports = { generateToken, verifyToken };
