const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;

const contactSchema = new mongoose.Schema(
  {
    clientId: {
      type: ObjectId,
      ref: "Client",
    },
    contact: String,
    lastContactDate: Date,
    nextContactDate: Date,
    observations: String
  },
  { timestamps: true }
);

contactSchema.methods.toJSON = function () {
  const contact = this._doc;
  delete contact.createdAt;
  delete contact.updatedAt;
  delete contact.__v;
  delete contact._id;
  delete contact.clientId;
  return contact;
};

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
