const express = require("express");
const {
  getContacts,
  getContact,
  postContact,
  updateWorkout,
  deleteWorkout,
} = require("../controllers/contactController");

const router = express.Router();

// GET all contacts
router.get("/", getContacts);

// GET a single contact
router.get("/:id", getContact);

// Post a contact
router.post("/", postContact);

// PUT a contact
router.patch("/:id", updateWorkout);

// DELETE a contact
router.delete("/:id", deleteWorkout);

module.exports = router;
