const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;

const personalDataSchema = new mongoose.Schema({
    clientId: {
    type: ObjectId,
    ref: "Client",
    },
    fansteam: String,
    sport: String,
    sex: String,
    religion: String,
    }, { timestamps: true });


    personalDataSchema.methods.toJSON = function () {
        const personal = this._doc;
        delete personal.createdAt;
        delete personal.updatedAt;
        delete personal.__v;
        delete personal._id;
        delete personal.clientId;
        return personal;
      };

const PersonalData = mongoose.model('PersonalData', personalDataSchema);

  
module.exports = PersonalData


  // { type: String, enum: ['Man', 'Woman', 'Non-binary'] },