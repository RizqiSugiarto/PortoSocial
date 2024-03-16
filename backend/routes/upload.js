const router = require("express").Router();
const cloudinary = require("../config/assetStore");

router.post("/img", (req, res) => {
  const { photo } = req.files;

  if (!photo) {
    return res.status(400).json({ message: "photo required" });
  }

  cloudinary.v2.uploader.upload(
    photo.tempFilePath,
    {
      public_id: new Date().getTime(),
    },
    (error, result) => {
      if (error) {
        return res.status(500).json({ message: "upload image failed" });
      } else {
        return res
          .status(200)
          .json({ message: "upload image successfuly", result });
      }
    }
  );
});

module.exports = router;
