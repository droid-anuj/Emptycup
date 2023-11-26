const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Contact = new Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  rating: { type: Number, required: true },
  description: { type: String, required: true },
  projects: { type: Number, required: true },
  years: { type: Number, required: true },
  price: { type: String, required: true },
  mobileNumbers: { type: [String], required: true },
});

const ContactModel = mongoose.model("ContactModel", Contact);

module.exports = ContactModel;
