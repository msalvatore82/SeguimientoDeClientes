const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;

const adminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  name: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  confirmed: Boolean,
  tokens: [],
}, { timestamps: true });

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
