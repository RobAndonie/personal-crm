const mongoose = require("mongoose");
const Contact = require("../models/contactModel");

// Get all contacts
const getContacts = async (req, res) => {
  const contacts = await Contact.find().sort({ createdAt: -1 });
  res.status(200).json(contacts);
};

// Get a single contact
const getContact = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Contact not found" });
  }

  const contact = await Contact.findById(id);

  if (!contact) {
    return res.status(404).json({ message: "Contact not found" });
  }

  return res.status(200).json(contact);
};

// Post a contact
const postContact = async (req, res) => {
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
};

// Update a contact
const updateWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Contact not found" });
  }

  const contact = await Contact.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    },
  );

  if (!contact) {
    return res.status(404).json({ message: "Contact not found" });
  }

  return res.status(200).json(contact);
};

// Delete a contact
const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Contact not found" });
  }

  const contact = await Contact.findOneAndDelete({ _id: id });

  if (!contact) {
    return res.status(404).json({ message: "Contact not found" });
  }

  return res.status(200).json(contact);
};

module.exports = {
  getContacts,
  getContact,
  postContact,
  updateWorkout,
  deleteWorkout,
};
