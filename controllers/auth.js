const jwt = require("jsonwebtoken");
require("dotenv").config();

const jwtSecretKey = process.env.JWT_SECRET_KEY;

const authenticateAdmin = (req, res, next) => {
  const authorizationHeader = req.headers.authorization;
  // console.log(authorizationHeader);
  if (!authorizationHeader) {
    return res.status(401).json({ error: "Authorization header missing" });
  }

  const token = authorizationHeader.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ error: "Token missing in Authorization header" });
  }

  jwt.verify(token, jwtSecretKey, (err, user) => {
    if (err) return res.status(403).json({ error: "Forbidden" });
    if (user.userType === "Admin") {
      req.user = user;
      next();
    } else {
      res.status(403).json({ error: "Forbidden" });
    }
  });
};

module.exports = { authenticateAdmin };
