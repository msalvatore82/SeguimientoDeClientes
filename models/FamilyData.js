const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;

const familyDataSchema = new mongoose.Schema(
  {
    clientId: {
      type: ObjectId,
      ref: "Client",
    },
    couple: { type: String },
    children: { type: [String], default: [] },
  },
  { timestamps: true }
);

familyDataSchema.methods.toJSON = function () {
    const familyData = this._doc;
    delete familyData.createdAt;
    delete familyData.updatedAt;
    delete familyData.__v;
    delete familyData._id;
    delete familyData.clientId;
    return familyData;
  };

const FamilyData = mongoose.model("FamilyData", familyDataSchema);

module.exports = FamilyData;
