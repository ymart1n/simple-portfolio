const express = require("express");
const helmet = require("helmet");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");

/// FRONTEND REST-API CONFIG
dotenv.config();

const PORT = process.env.PORT || 3001;

const app = express();

/// DB CONNECTION
const mongoString = process.env.DB_CONNECTION;

mongoose.connect(mongoString, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("error", (error) => {
  if (process.env.NODE_ENV === "development") {
    console.log(error);
  }
});

mongoose.connection.on("open", () => {
  console.log("Connected to MongoDB database");
});

/// REST-API CONFIG
app.use(cors());

/// FRONTEND REST-API CONFIG
app.use(helmet());

/// ROUTES
app.get("/", (_, res) => {
  res.send("website-api is working!!");
});

app.use(require("./routes/index.js"));

/// RUN SERVER
app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}`);
});
