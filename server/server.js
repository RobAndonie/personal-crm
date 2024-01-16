require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const contactsRoutes = require("./routes/contacts");

// Express App
const app = express();

// Middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

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
