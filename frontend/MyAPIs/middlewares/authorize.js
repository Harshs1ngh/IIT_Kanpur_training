const authorize = (role) => {
  return (req, res, next) => {
    if (role !== req.user.role) 
      {
        return res.status(403).json({
              success: false,
              message: "Access denied"
            });
    }
    next();
  };
};

module.exports = authorize;
