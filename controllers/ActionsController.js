const Actions = require("../models/Actions");
const Client = require("../models/Client");

const ActionsController = {
  async createAction(req, res) {
    try {
      const actions = await Actions.create({
        ...req.body
      });
      await Client.updateOne(
        { _id: req.body.clientId },
        { $push: { actions: actions._id } }
      );
      res.status(200).send({ msg: "Acciones con el cliente", actions });
    } catch (error) {
      res.status(500).send(error);
    }
  }
};
module.exports = ActionsController;
