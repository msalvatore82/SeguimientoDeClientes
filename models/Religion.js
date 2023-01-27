const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;

const religionSchema = new mongoose.Schema({
    religion: String,
  }, { timestamps: true });
  

  const Religion = mongoose.model('Religion', religionSchema);
  module.exports = Religion;
