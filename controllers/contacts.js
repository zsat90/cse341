const mongoose = require("mongoose");
const connectDB = require("../dbConn/connect");

// This connects to the db
connectDB();

const getAllContacts = async (req, res, next) => {
  try {
    //Using the connection to get the list of contacts
    const contacts = await mongoose.connection
      .collection("contacts")
      .find({})
      .toArray();
    res.json(contacts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getContactById = async (req, res, next) => {
  const contactId = req.params.id;

  try {
    const contact = await mongoose.connection
      .collection("contacts")
      .findOne({ _id: new mongoose.Types.ObjectId(contactId) });

    if (!contact) {
      return res.status(404).json({ error: "Contact not found" });
    }
    res.json(contact);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { getAllContacts, getContactById };
