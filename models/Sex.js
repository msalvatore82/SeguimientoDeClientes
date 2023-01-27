const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;

const sexSchema = new mongoose.Schema({
    gender: { type: String, enum: ['Man', 'Woman', 'Non-binary'] },
  }, { timestamps: true });

  const Sex = mongoose.model('Sex', sexSchema);
  module.exports = Sex;
