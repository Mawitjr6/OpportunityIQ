const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");
const db = require("../config/db");

router.post(
  "/upload",
  upload.single("document"),
  (req, res) => {

    const fileName = req.file.filename;
    const filePath = req.file.path;

    db.query(
      `INSERT INTO documents
      (lead_id, file_name, file_path)
      VALUES (?, ?, ?)`,
      [1, fileName, filePath],

      (err, result) => {

        if (err) {
          return res.status(500).json(err);
        }

        res.json({
          success: true,
          file: fileName
        });

      }
    );

  }
);

router.get("/", (req, res) => {

  db.query(
    "SELECT * FROM documents",

    (err, results) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json(results);

    }
  );

});

module.exports = router;
