const express = require("express");
const app = express();
const PORT = process.env.PORT || process.argv[2] || 8080;
// const videosRoutes = require("./routes/videosRoute");
const cors = require("cors");
const fs = require("fs");

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

/*
 *read electronics.json file
 */
function loadElectronicData(callback) {
  fs.readFile("./data/electronics.json", "utf8", callback);
}

/*
 *Get all the electronics
 */
app.get("/electronics", (req, res) => {
  loadElectronicData((err, data) => {
    if (err) {
      res.send("sorry no info found");
    } else {
      const electronics = JSON.parse(data);
      res.json(electronics);
    }
  });
});

app.listen(PORT, function () {
  console.log(`Hello our server is up and running on ${PORT}`);
});
