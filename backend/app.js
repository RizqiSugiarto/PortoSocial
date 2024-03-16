const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const helmet = require("helmet");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/post");
const imageUpload = require("./routes/upload");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connect to mongoDb"));

//middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("common"));
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/post", postRoute);
app.use("/api/upload", imageUpload);

app.listen(8000, () => {
  console.log("Server is running");
});
