const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;

const statusSchema = new mongoose.Schema({
    status: { type: String, enum: ['Active', 'Inactive', 'Low'] },
  }, { timestamps: true });

  const Status = mongoose.model('Status', statusSchema);
  module.exports = Status;

