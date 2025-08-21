const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(express.static("public")); // serve your HTML files from "public" folder

const filePath = path.join(__dirname, "donations.json");

// POST route to store donation data
app.post("/donate", (req, res) => {
  const donation = req.body;

  fs.readFile(filePath, "utf8", (err, data) => {
    let donations = [];
    if (!err && data) {
      donations = JSON.parse(data);
    }
    donations.push(donation);

    fs.writeFile(filePath, JSON.stringify(donations, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: "Failed to save donation" });
      }
      res.json({ message: "Donation saved successfully!" });
    });
  });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
