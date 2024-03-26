import { Post } from "../model/post-model";
import { Request, Response, NextFunction } from "express";
import PostService from "../services/post-service";

export class PostController {
  static async createPost(req: Request, res: Response, next: NextFunction) {
    try {
      const postData: Post = req.body as Post;
      const response = await PostService.create(postData);

      res.status(201).json({
        data: response,
      });
    } catch (e) {
      next(e);
    }
  }
  static async getAllPost(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await PostService.getAll();

      res.status(201).json({
        data: response,
      });
    } catch (e) {
      next(e);
    }
  }
  static async getByIdPost(req: Request, res: Response, next: NextFunction) {
    try {
      const postId: string = req.params.id;
      const response = await PostService.getById(postId);

      res.status(201).json({
        data: response,
      });
    } catch (e) {
      next(e);
    }
  }
  static async updatePost(req: Request, res: Response, next: NextFunction) {
    try {
      const postId: string = req.params.id;
      const postdata: Post = req.body as Post;

      const response = await PostService.update(postId, postdata);

      res.status(201).json({
        data: response,
      });
    } catch (e) {
      next(e);
    }
  }
}
