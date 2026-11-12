const Lead = require("../models/leadModel");

exports.getLeads = (req, res) => {
  Lead.getAllLeads((err, results) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json(results);
  });
};

exports.createLead = (req, res) => {
  Lead.createLead(req.body, (err, results) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json({
      success: true,
      id: results.insertId
    });
  });
};