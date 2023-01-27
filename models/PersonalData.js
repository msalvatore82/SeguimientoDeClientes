const mongoose = require("mongoose");

const personalDataSchema = new mongoose.Schema({
    name:  String,
    lastName: String,
    birthday: { type: Date },
        sex: { type: mongoose.Schema.Types.ObjectId, ref: 'Sex' },
    status: { type: mongoose.Schema.Types.ObjectId, ref: 'Status' },
    qualification: { type: mongoose.Schema.Types.ObjectId, ref: 'Qualification' },
    religion: { type: mongoose.Schema.Types.ObjectId, ref: 'Religion' },
  }, { timestamps: true });

const PersonalData = mongoose.model('PersonalData', personalDataSchema);

  
module.exports = PersonalData