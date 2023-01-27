const mongoose = require('mongoose');


const ObjectId = mongoose.SchemaTypes.ObjectId;


const actionsSchema = new mongoose.Schema({
    clientId: {
        type: ObjectId,
        ref: "User",
      },
    need: { type: mongoose.Schema.Types.ObjectId, ref: 'Need' },
    presentation: { type: mongoose.Schema.Types.ObjectId, ref: 'Presentation' },
    contact: { type: mongoose.Schema.Types.ObjectId, ref: 'Contact' },
  } , { timestamps: true });

  const Actions = mongoose.model('Actions', actionsSchema);

  module.exports = Actions;
