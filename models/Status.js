const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;

const statusSchema = new mongoose.Schema({
    clientId: {
        type: ObjectId,
        ref: "Client",
      },
    status: String,
  }, { timestamps: true});

  statusSchema.methods.toJSON = function () {
    const status = this._doc;
    delete status.createdAt;
    delete status.updatedAt;
    delete status.__v;
    delete status._id;
    delete status.clientId;
    return status;
  };

  const Status = mongoose.model('Status', statusSchema);
  module.exports = Status;


//   enum: ['Active', 'Inactive', 'Low'] }
