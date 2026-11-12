const express = require("express");
const router = express.Router();

const {
  getLeads,
  createLead
} = require("../controllers/leadController");

router.get("/", getLeads);

router.post("/", createLead);

module.exports = router;