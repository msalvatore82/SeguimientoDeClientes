const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;


const presentationsSchema = new mongoose.Schema({
    presentation: { type: String, enum: ['Yes', 'No'] },
  }, { timestamps: true });

  const PresentationsSchema = mongoose.model('presentationsSchema', presentationsSchema);

module.exports = PresentationsSchema