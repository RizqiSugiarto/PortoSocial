import bcrypt from "bcrypt";

export class PasswordUtils {
  private static readonly SALT_ROUND = 10;

  public static async hashPassword(plainPassword: string): Promise<string> {
    const salt = await bcrypt.genSalt(PasswordUtils.SALT_ROUND);
    const hashPassword = await bcrypt.hash(plainPassword, salt);
    return hashPassword;
  }

  public static async comparePassword(
    plainPassword: string,
    hashedPassword: string
  ): Promise<boolean> {
    const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
    return isMatch;
  }
}
