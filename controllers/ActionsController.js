const Actions = require("../models/Actions");
const Client = require("../models/Client");

const ActionsController = {
  async createAction(req, res) {
    try {
      const actions = await Actions.create({
        ...req.body
      });
      const client = await Client.findById(req.body.clientId);
      client.actions.push(actions._id);
      await client.save();
      res.status(200).send({ msg: "Acciones con el cliente", actions });
    } catch (error) {
      res.status(500).send(error);
    }
  }
};
module.exports = ActionsController;
