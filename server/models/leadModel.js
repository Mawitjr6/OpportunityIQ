const db = require("../config/db");

exports.getAllLeads = (callback) => {
  db.query("SELECT * FROM leads", callback);
};

exports.createLead = (leadData, callback) => {
  db.query(
    "INSERT INTO leads SET ?",
    leadData,
    callback
  );
};