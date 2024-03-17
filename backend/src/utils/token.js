const Jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

function GenereateTokenJwt(usersId, userName) {
  return Jwt.sign(
    { userId: usersId, userName: userName },
    process.env.SECRET_KEY,
    {
      expiresIn: "3600s",
    }
  );
}

function VerifyToken(token) {
  Jwt.verify(token, process.env.SECRET_KEY, (err) => {
    return err;
  });
}

module.exports = { GenereateTokenJwt, VerifyToken };
