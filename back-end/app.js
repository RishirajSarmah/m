const express = require("express");
const app = express();
const connectDB = require("./db/db-connect");
const dbSchema = require("./db/db-schema");
const routes = require("./router/routes");
const cors = require("cors");
require("dotenv").config();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true
  })
);
app.use(express.json());
app.use("/cinephile", routes);
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(5000, () => {
      console.log("server is listening on port 3000...");
    });
  } catch (error) {
    console.log(error);
  }
};
start();
