const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

const adminRoutes = require("./routes/admin");
const app = express();

const PORT = 8080;
const dbURL = process.env.DB_URL;

//db connection
mongoose
  .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((error) => {
    console.error(`Unable to connect to MongoDB: ${error}`);
  });


// Middleware
app.use(bodyParser.json());

// routes
app.use("/api/admin", adminRoutes);

//server
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
