import { UserModel, User, loginResponse } from "../model/user-model";
import { PasswordUtils } from "../utils/password-utils";
import { ResponseError } from "../error/response-error";
import { GenerateTokenJwt } from "../utils/jwtToken-utils";

class UserService {
  static async register(userdata: User): Promise<Omit<User, "password">> {
    const existingUserName = await UserModel.findOne({
      username: userdata.username,
    });
    if (existingUserName) {
      throw new ResponseError(401, "Username already Use");
    }

    const existingEmail = await UserModel.findOne({ email: userdata.email });
    if (existingEmail) {
      throw new ResponseError(401, "Email already Use");
    }

    const hashedPassword = await PasswordUtils.hashPassword(userdata.password);
    userdata.password = hashedPassword;
    const userData = await UserModel.create(userdata);
    return userData;
  }

  static async login(
    email: string,
    password: string
  ): Promise<loginResponse | null> {
    const userData = await UserModel.findOne({ email: email });

    if (!userData) {
      throw new ResponseError(401, "Wrong Email");
    }

    const isValidPassword = await PasswordUtils.comparePassword(
      password,
      userData.password
    );
    if (!isValidPassword) {
      throw new ResponseError(401, "Wrong Password");
    }

    let response: loginResponse = {
      username: userData.username,
      token: GenerateTokenJwt(userData.username),
    };

    return response;
  }

  static async getAll(): Promise<User[]> {
    return UserModel.find();
  }
  static async getById(userId: string): Promise<User | null> {
    return UserModel.findById(userId);
  }

  static async update(userId: string, userdata: User): Promise<User | null> {
    return UserModel.findByIdAndUpdate(userId, userdata);
  }

  // static async delete(userId: string): Promise<void> {
  //     await UserModel.findByIdAndDelete(userId);
  // }
}

export default UserService;
