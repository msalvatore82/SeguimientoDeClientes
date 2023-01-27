const mongoose = require("mongoose");


const ObjectId = mongoose.SchemaTypes.ObjectId;

const familyDataSchema = new mongoose.Schema({
    couple: { type: String },
    children: [{ type: String }],
  }, { timestamps: true });

  const FamilyData = mongoose.model('FamilyData', familyDataSchema);

  module.exports = FamilyData