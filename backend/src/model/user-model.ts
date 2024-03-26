import { Schema, model, Document } from "mongoose";

interface User extends Document {
  username: string;
  email: string;
  password: string;
  profilePicture?: string;
  coverPicture?: string;
  followers?: string[];
  following?: string[];
  isAdmin?: boolean;
  desc?: string;
  city?: string;
  from?: string;
  relationship?: number;
}

type loginResponse = {
  username: string;
  token?: string;
};

interface updateProfileRequest {
  username: string;
}

const userSchema = new Schema<User>(
  {
    username: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 20,
      unique: true,
    },
    email: { type: String, required: true, maxlength: 50, unique: true },
    password: { type: String, required: true, minlength: 6 },
    profilePicture: { type: String, default: "" },
    coverPicture: { type: String, default: "" },
    followers: { type: [String], default: [] },
    following: { type: [String], default: [] },
    isAdmin: { type: Boolean, default: false },
    desc: { type: String, maxlength: 50 },
    city: { type: String, maxlength: 50 },
    from: { type: String, maxlength: 50 },
    relationship: { type: Number, enum: [1, 2, 3] },
  },
  { timestamps: true }
);

const UserModel = model<User>("User", userSchema);

export { User, UserModel, loginResponse, updateProfileRequest };
