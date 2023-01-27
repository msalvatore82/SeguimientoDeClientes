const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;

const contactSchema = new mongoose.Schema({
    clientId: {
        type: ObjectId,
        ref: "User",
      },
    contact: { type: String, enum: ['Yes', 'No'] },
  }, { timestamps: true });

    
  const Contact = mongoose.model('Contact', contactSchema);


  module.exports = Contact
  
  