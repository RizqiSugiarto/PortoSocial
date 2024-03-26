import { UserModel } from "../model/user-model";
import { ResponseError } from "../error/response-error";

export class assetService {
  static async upload(imgName: string, username: string): Promise<void> {
    console.log(username, "SEPEPRTI INI");
    const userData = await UserModel.findOneAndUpdate(
      { username: username },
      { profilePicture: imgName },
      { new: true }
    );

    console.log(userData, "SEPERTI INIHHH");

    if (!userData) {
      throw new ResponseError(404, "Data Not Found");
    }
  }
}
