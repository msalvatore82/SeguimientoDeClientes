const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;

const personalDataSchema = new mongoose.Schema(
  {
    clientId: {
      type: ObjectId,
      ref: "Client",
    },
    fansteam: String,
    sport: String,
    sex: String,
    religion: String,
    titleprofession: String,
    celebrationDay: String,
  },
  { timestamps: true }
);

personalDataSchema.methods.toJSON = function () {
  const personalData = this._doc;
  delete personalData.createdAt;
  delete personalData.updatedAt;
  delete personalData.__v;
  delete personalData._id;
  delete personalData.clientId;
  return personalData;
};

const PersonalData = mongoose.model("PersonalData", personalDataSchema);

module.exports = PersonalData;

// { type: String, enum: ['Man', 'Woman', 'Non-binary'] },
