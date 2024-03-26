import { Request, Response, NextFunction } from "express";
import { assetService } from "../services/asset-service";
import { User } from "../model/user-model";

export class AssetController {
  static async upload(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.file) {
        throw new Error("File is missing");
      }
      const userData = req.body.data;

      const img = req.file.originalname;
      const name = req.file.filename;

      const user: User = JSON.parse(userData);

      if (img && name) {
        await assetService.upload(name, user.username);
        res.status(200).json({ data: name });
      } else {
        throw new Error("Original name or file name is missing");
      }
    } catch (error) {
      next(error);
    }
  }
}
