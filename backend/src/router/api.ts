import express from "express";
import { PostController } from "../controller/post-controller";
import { UserController } from "../controller/user-controller";
import { AssetController } from "../controller/asset-controller";
import upload from "../app/asset-store";
import { Auth } from "../middleware/auth-middleware";

export const apiRouter = express.Router();

// Users API
apiRouter.post("/api/auth/register", UserController.registerUser);
apiRouter.post("/api/auth/login", UserController.loginUser);
apiRouter.get("/api/users", Auth, UserController.getAllUser);
apiRouter.get("/api/users/:id", Auth, UserController.getByIdUser);
apiRouter.patch("/api/users", Auth, UserController.updateUser);

//Post API
apiRouter.get("/api/post", Auth, PostController.getAllPost);
apiRouter.post("/api/post", Auth, PostController.createPost);
apiRouter.patch("/api/post", Auth, PostController.updatePost);
apiRouter.get("/api/post/:id", Auth, PostController.getByIdPost);

//IMAGE
apiRouter.post("/api/upload", upload.single("file"), AssetController.upload);
