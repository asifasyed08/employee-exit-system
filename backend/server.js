const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");

const resignationRoutes = require("./routes/resignationRoutes");

const clearanceRoutes = require("./routes/clearanceRoutes");
const assetRoutes = require("./routes/assetRoutes");
const settlementRoutes = require("./routes/settlementRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/auth", authRoutes);

app.use("/api/resignations", resignationRoutes);
app.use("/api/settlements", settlementRoutes);
app.use("/api/clearance", clearanceRoutes);
app.use("/api/assets", assetRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.get("/", (req, res) => {
  res.send("API Running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});