const { VerifyToken } = require("../utils/token");

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split("")[1];

  if (token == null) return res.sendStatus(401);

  const verify = VerifyToken(token);

  if (verify) return res.sendStatus(403);

  next();
}

module.exports = authenticateToken;
