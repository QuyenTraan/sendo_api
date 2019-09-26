const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3100;
const fs = require("fs");

express()
  .use(express.static(path.join(__dirname, "public")))
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "ejs")
  .get("/", (req, res) => res.render("pages/index"))
  .get("/api/sen-do/getone", (req, res) => {
    let keys = fs.readFileSync(
      path.join(__dirname, "data", "crm-loai.json"),
      "utf-8"
    );

    res.status(200).json({
      result: JSON.parse(keys)
    });
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
