const mongoose = require("mongoose");
const moment = require("moment");
const PersonalData = require('./PersonalData');


const clientSchema = new mongoose.Schema(
  {
    name: String,
    lastname: String,
    email: String,
    phonenumber: Number,
    address: String,
    age: Number,
    personalData: { type: mongoose.Schema.Types.ObjectId, ref: "PersonalData" },
    familyData: { type: mongoose.Schema.Types.ObjectId, ref: "FamilyData" },
    actions: { type: mongoose.Schema.Types.ObjectId, ref: "Actions" },
  },
  { timestamps: true }
);

clientSchema.pre("save", async function (next) {
    const personalData = await PersonalData.findOne({ _id: this.personalData });
    if (personalData) {
        this.age = moment().diff(personalData.birthday, "years");
    } else {
        this.age = null;
    }
    next();
});

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;
