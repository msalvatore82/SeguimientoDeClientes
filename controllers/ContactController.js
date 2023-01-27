const Contact = require("../models/Contact");

const ContactController = {
  async contact(req, res) {
    try {
      const contact = await Contact.create({ contact: req.body.contact, clientId: req.body.clientId });      res.status(200).send(contact);
    } catch (error) {
      res.status(500).send(error);
    }
  },
};
module.exports = ContactController;
