const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;

const followUpActionsSchema = new mongoose.Schema(
  {
    clientId: {
      type: ObjectId,
      ref: "Client",
    },
    call: [
      {
        observations: String,
        contactDate: { type: Date },
      },
    ],
    regards: [
      {
        greetingsType: String,
        dateOfGreetings: { type: Date },
      },
    ],
    dateToRemember: [
      {
        remember: String,
        date: { type: Date },
      },
    ],
    popBy: [
      {
        string: { type: String },
        date: { type: Date },
        value: { type: Number },
      },
    ],
  },
  { timestamps: true }
);

followUpActionsSchema.methods.toJSON = function () {
  const followUpActions = this._doc;
  delete followUpActions.createdAt;
  delete followUpActions.updatedAt;
  delete followUpActions.__v;
  delete followUpActions._id;
  delete followUpActions.clientId;
  return followUpActions;
};

const FollowUpActions = mongoose.model(
  "FollowUpActions",
  followUpActionsSchema
);

module.exports = FollowUpActions;
