import { PostModel, Post } from "../model/post-model";
import { ResponseError } from "../error/response-error";

class PostService {
  static async getAll(): Promise<Post[]> {
    return PostModel.find();
  }
  static async getById(userId: string): Promise<Post | null> {
    const userData = PostModel.findById(userId);
    if (!userData) {
      throw new ResponseError(404, "Data not found");
    }
    return userData;
  }
  static async create(userData: Post): Promise<Post> {
    return PostModel.create(userData);
  }
  static async update(userId: string, userdata: Post): Promise<Post | null> {
    const userData = PostModel.findByIdAndUpdate(userId, userdata);
    if (!userData) {
      throw new ResponseError(404, "Data not found");
    }
    return userData;
  }
}

export default PostService;
