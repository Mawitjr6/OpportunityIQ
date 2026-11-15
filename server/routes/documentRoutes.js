const express = require("express");
const router = express.Router();



const upload =
  require("../middleware/upload");



router.post(
  "/upload",
  upload.single("document"),
  (req, res) => {



    res.json({
      success: true,
      file: req.file.filename
    });
  }
);



module.exports = router;