const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) res.status(403).json("Token is not valid!");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated!");
  }
};

const verifyTokenAndAuthorization = (req, res, next) => {
  // Step 1: Verify the token
  verifyToken(req, res, () => {
    // Step 2: Check if the user is authorized
    if (req.user.id === req.params.id || req.user.isAdmin) {
      // Step 3: User is authorized, call the next middleware function
      next();
    } else {
      // Step 4: User is not authorized, send a 403 Forbidden response
      res.status(403).json("You are not allowed to do that!");
    }
  });
};


const verifyTokenAndAdmin = (req, res, next) => {
  // Step 1: Verify the token
  verifyToken(req, res, () => {
    // Step 2: Check if the user is an admin
    if (req.user.isAdmin) {
      // Step 3: User is an admin, call the next middleware function
      next();
    } else {
      // Step 4: User is not an admin, send a 403 Forbidden response
      res.status(403).json("You are not allowed to do that!");
    }
  });
};

module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
};
