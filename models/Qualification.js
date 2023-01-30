const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;

const qualificationSchema = new mongoose.Schema(
  {
    clientId: {
      type: ObjectId,
      ref: "Client",
    },
    qualification: String,
  },
  { timestamps: true }
);

qualificationSchema.methods.toJSON = function () {
    const qualification = this._doc;
    delete qualification.createdAt;
    delete qualification.updatedAt;
    delete qualification.__v;
    delete qualification._id;
    delete qualification.clientId;
    return qualification;
  };

const QualificationSchema = mongoose.model(
  "Qualification",
  qualificationSchema
);



module.exports = QualificationSchema;

// { type: String, enum: ["A+", "A", "B", "C"] },
