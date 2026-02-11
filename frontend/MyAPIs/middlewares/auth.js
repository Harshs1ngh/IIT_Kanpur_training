const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  
  try {    
    // Read token from cookie
      const token = req.cookies.token;

    // if token not present, not logged in
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Login required"
      });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user info
    req.user = decoded; // { id, role }
    next();
    
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token"
    });
  }
};

module.exports = auth;
