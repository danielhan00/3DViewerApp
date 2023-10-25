const express = require("express");
const fileUpload = require("express-fileupload");
const router = express.Router();
const path = require("path");

const assetsFolder = path.join(__dirname, "assets");

router.use(fileUpload());

const upload = multer({ dest: "uploads/" });

router.post("/upload", upload.single("glbFile"), (req, res) => {
  const uploadedFile = req.file;
  const filePath = uploadedFile.path;

  fetch.readFile(filePath, (err, data) => {
    if (err) throw err;

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.send(data);
  });
  res.json({ message: "File uploaded successfully", file: uploadedFile });
});

module.exports = router;
