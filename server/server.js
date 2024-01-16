require("dotenv").config();

const morgan = require("morgan");
const express = require("express");
const mongoose = require("mongoose");
const contactsRoutes = require("./routes/contacts");

// Express App
const app = express();

// Middleware
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/contacts", contactsRoutes);

// Connect to DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // Listen for requests
    app.listen(process.env.PORT, () => {
      console.log("Connected to DB & server is listening on port 4000!");
    });
  })
  .catch((error) => {
    console.log(error);
  });
