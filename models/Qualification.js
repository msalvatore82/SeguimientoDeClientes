const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;

const qualificationSchema = new mongoose.Schema(
  {
    qualification: { type: String, enum: ["A+", "A", "B", "C"] },
  },
  { timestamps: true }
);

const QualificationSchema = mongoose.model(
  "qualificationSchema",
  qualificationSchema
);

module.exports = QualificationSchema;
