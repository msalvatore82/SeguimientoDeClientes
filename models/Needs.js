const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;

const needsSchema = new mongoose.Schema({
    needs: { type: String, enum: ['Buy', 'Sell', 'Rent', 'Rent as tenant'] },
  }, { timestamps: true });

  const Needs = mongoose.model('Needs', needsSchema);

  module.exports = Needs
