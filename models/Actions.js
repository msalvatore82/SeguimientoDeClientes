const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;


const actionsSchema = new mongoose.Schema({
    clientId: {
        type: ObjectId,
        ref: "Client",
      },
    need: String,
    presentation: String,
    contact: String,
    tracing: String,
    lastContactDate: Date,
    nextContactDate: Date,
    observations: String
  } , { timestamps: true });

  actionsSchema.methods.toJSON = function () {
    const actions = this._doc;
    delete actions.createdAt;
    delete actions.updatedAt;
    delete actions.__v;
    delete actions._id;
    delete actions.clientId;
    return actions;
  };

  const Actions = mongoose.model('Actions', actionsSchema);

  module.exports = Actions;


//   needs: { type: String, enum: ['Buy', 'Sell', 'Rent', 'Rent as tenant'] },
// presentation: { type: String, enum: ['Yes', 'No'] },

