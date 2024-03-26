import { User } from "../model/user-model";
import { Request, Response, NextFunction } from "express";
import UserService from "../services/user-services";

export class UserController {
  static async registerUser(req: Request, res: Response, next: NextFunction) {
    try {
      const request: User = req.body as User;
      const response = await UserService.register(request);

      res.status(201).json({
        data: response,
      });
    } catch (e) {
      next(e);
    }
  }

  static async loginUser(req: Request, res: Response, next: NextFunction) {
    try {
      const request: User = req.body as User;
      const response = await UserService.login(request.email, request.password);

      res.cookie("jwtToken", response?.token, {
        httpOnly: true,
        secure: true,
        maxAge: 3600000,
      });

      res.status(200).json({
        data: response,
      });
    } catch (e) {
      next(e);
    }
  }

  static async updateUser(req: Request, res: Response, next: NextFunction) {
    try {
      const request: User = req.body as User;
      const usersId: string = req.params.id;

      const response = await UserService.update(usersId, request);

      res.status(201).json({
        data: response,
      });
    } catch (e) {
      next(e);
    }
  }
  static async getByIdUser(req: Request, res: Response, next: NextFunction) {
    try {
      const usersId: string = req.params.id;
      const response = await UserService.getById(usersId);

      res.status(200).json({
        data: response,
      });
    } catch (e) {
      next(e);
    }
  }
  static async getAllUser(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await UserService.getAll();

      res.status(200).json({
        data: response,
      });
    } catch (e) {
      next(e);
    }
  }
}
