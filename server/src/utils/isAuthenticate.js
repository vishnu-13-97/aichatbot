const { verifyToken } = require("./jwt");
require("dotenv").config();

const isAuthenticate = (req, res, next) => {
  try {
    const token = req.signedCookies[process.env.COOKIE_NAME];

    if (!token || token.trim() === "") {
      return res.status(401).json({ success: false, message: "Token not received" });
    }

    const decoded = verifyToken(token);

    
    req.user = decoded;

    next();
  } catch (err) {
    console.error("Auth error:", err.message);
    return res.status(401).json({ success: false, message: "Invalid or expired token" });
  }
};

module.exports = isAuthenticate;
