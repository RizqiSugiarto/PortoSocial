import { Request, Response, NextFunction } from "express";
import { JwtPayload } from "jsonwebtoken";
import { ResponseError } from "../error/response-error";
import { verifyTokenJwt } from "../utils/jwtToken-utils";

interface CustomRequest extends Request {
  token: string | JwtPayload | undefined;
}

export const Auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
      throw new ResponseError(403, "Forbidden Resource");
    }
    const decoded = verifyTokenJwt(token);
    (req as CustomRequest).token = decoded;
    next();
  } catch (e) {
    next(e);
  }
};
