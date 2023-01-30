const Client = require("../models/Client");
const Status = require("../models/Status");

const StatusController = {
  async createStatus(req, res) {
    try {
      const status = await Status.create({
        ...req.body
      });
      const client = await Client.findById(req.body.clientId);
      client.status.push(status._id);
      await client.save();
      res.status(200).send({ msg: "El cliente esta", status });
    } catch (error) {
      res.status(500).send(error);
    }
  }
};
module.exports = StatusController;
