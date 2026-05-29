const express = require("express");
const cors = require("cors");
const compression = require("compression");

const app = express();

app.use(cors());
app.use(express.json());
app.use(compression());

// HEALTH CHECK ROUTE
app.get("/", (req, res) => {
  res.json({
    status: "School ERP API Running",
    time: new Date()
  });
});

// IMPORTANT FOR RENDER
const PORT = process.env.PORT || 10000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port", PORT);
});
