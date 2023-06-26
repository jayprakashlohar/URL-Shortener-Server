const express = require("express");
require("dotenv").config();
const { connection } = require("./config/db");
const { urlRoute } = require("./routes/Url.route");
const cors = require("cors");
const app = express();

app.use(express.json());
const port = process.env.PORT;
app.use(
  cors({
    origin: "*",
  })
);
app.get("/", (req, res) => {
  res.send("Welcome...");
});

app.use("/api", urlRoute);

app.listen(port, async () => {
  try {
    await connection;
    console.log("Connect to database successfully !!");
  } catch (error) {
    console.log(error);
  }
  console.log(`Listing on port ${port}`);
});
