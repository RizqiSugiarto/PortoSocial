import jwt = require("jsonwebtoken");
import dotenv from "dotenv";

dotenv.config();

const secret = process.env.SECRET_KEY;

export function GenerateTokenJwt(username: string): string {
  if (secret) {
    return jwt.sign({ data: username }, secret, { expiresIn: 60 * 60 });
  }
  return "";
}

export function verifyTokenJwt(
  token: string
): string | jwt.JwtPayload | undefined {
  if (secret) {
    return jwt.verify(token, secret);
  }
  return "";
}
