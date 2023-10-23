/*  Establishes an express node server to handle 
    file uploads from the user in tandem with the front end.

    API: filenames
      - API for frontend to call and obtain filenames of server stored GLB files
*/

const express = require("express");
const app = express();
const profile = require("./profile");
const fs = require("fs");
const path = require("path");
const cors = require("cors");


app.use("/profile", profile, cors);

const port = +process.env.PORT || 3000;
app.listen(port, () => {
  console.log("server is running at " + port);
});

app.use("/assets", express.static("assets"));

// Define the route to retrieve filenames
app.get("/api/filenames", (req, res) => {
  const assetsDirectory = path.join(__dirname, "assets");
  fs.readdir(assetsDirectory, (err, files) => {
    if (err) {
      console.error("Error reading directory:", err);
      return res.status(500).json({ error: "Unable to read directory" });
    }

    if (files.length === 0) {
      return res.json({ filenames: [] }); // Send an empty array if no files are found
    }

    res.json({ filenames: files });
  });
});

