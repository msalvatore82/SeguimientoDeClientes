const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const clientSchema = new mongoose.Schema({
name: String,
lastname: String,
email: String,
phonenumber: Number,
address: String,
age: Number,
birthday: Date,
personalData: [{ type: ObjectId, ref: "PersonalData"}],
familyData: [{ type: ObjectId, ref: "FamilyData"}],
actions: [{ type: ObjectId, ref: "Actions"}],
status: [{ type: ObjectId, ref: "Status"}],
qualification: [{ type: ObjectId, ref: "Qualification"}],


}, { timestamps: true });

clientSchema.methods.toJSON = function () {
    const client = this._doc;
    delete client.createdAt;
    delete client.updatedAt;
    delete client.__v;
    return client;
  };

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;
