import { existsSync, mkdirSync } from "fs";
import multer from "multer";
import path from "path";

const dirImg = "./uploads";

if (!existsSync(dirImg)) {
  mkdirSync(dirImg);
}

const upload = multer({
  dest: "uploads",
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
      cb(null, new Date().valueOf() + path.extname(file.originalname));
    },
  }),
});

export default upload;
