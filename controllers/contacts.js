const mongoose = require('mongoose');
const connectDB = require('../dbConn/connect');
const Contact = require('../models/models');

// This connects to the db
connectDB();

const getAllContacts = async (req, res, next) => {
  try {
    //Using the connection to get the list of contacts
    const contacts = await mongoose.connection.collection('contacts').find({}).toArray();
    res.json(contacts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' || res.error });
  }
};

const getContactById = async (req, res, next) => {
  const contactId = req.params.id;

  try {
    const contact = await mongoose.connection
      .collection('contacts')
      .findOne({ _id: new mongoose.Types.ObjectId(contactId) });

    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }
    res.json(contact);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' || res.error });
  }
};

const createContact = async (req, res) => {
  try {
    const { firstName, lastName, email, favoriteColor, birthday } = req.body;

    const newContact = new Contact({
      firstName,
      lastName,
      email,
      favoriteColor,
      birthday
    });

    await newContact.save();

    const contactId = newContact._id;
    res.status(201).json({ message: 'Contact Created Successfully', contactId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Contact not created' || res.error });
  }
};

const updateContact = async (req, res) => {
  const contactId = req.params.id;
  try {
    const updatedContact = await Contact.findByIdAndUpdate(contactId, req.body, { new: true });
    if (!updatedContact) {
      return res.status(404).json({ error: 'Contact not found' });
    }
    res.status(204).end();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Contact not updated' || res.error });
  }
};

const deleteContact = async (req, res) => {
  const contactId = req.params.id;
  try {
    const deletedContact = await Contact.findByIdAndDelete(contactId);
    res.status(200).json({ deletedContact, message: 'Has been sucessfully deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Contact not updated' || res.error });
  }
};

module.exports = { getAllContacts, getContactById, createContact, updateContact, deleteContact };
