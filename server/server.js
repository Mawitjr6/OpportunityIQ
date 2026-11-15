const express = require("express");
const cors = require("cors");
const db = require("./config/db");

const leadRoutes = require("./routes/leadRoutes");
const documentRoutes = require("./routes/documentRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/leads", leadRoutes);
app.use("/api/documents", documentRoutes);

app.get("/", (req, res) => {
  res.json({
    application: "OpportunityIQ",
    status: "Running Successfully"
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});