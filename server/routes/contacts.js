const express = require("express");
const Contact = require("../models/ContactModel");

const router = express.Router();

// GET all contacts
router.get("/", (req, res) => {
  res.json({ message: "Get contacts" });
});

// GET a single contact
router.get("/:id", (req, res) => {
  res.json({ message: "Get single contact" });
});

// Post a contact
router.post("/", async (req, res) => {
  const { name, email, phoneNumber, company, position, location, notes } =
    req.body;
  try {
    const newContact = await Contact.create({
      name,
      email,
      phoneNumber,
      company,
      position,
      location,
      notes,
    });
    res.status(200).json(newContact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT a contact
router.patch("/:id", (req, res) => {
  res.json({ message: "Put a contact" });
});

// DELETE a contact
router.delete("/:id", (req, res) => {
  res.json({ message: "Delete a contact" });
});

module.exports = router;
