const Client = require("../models/Client");
const Status = require("../models/Status");

const StatusController = {
  async createStatus(req, res) {
    try {
      const status = await Status.create({
        ...req.body
      });
      await Client.findByIdAndUpdate(req.client._id, {
        $push: { status: status._id },
      });
      res.status(200).send({ msg: "El cliente esta", status });
    } catch (error) {
      res.status(500).send({ msg: "Hay un problema", error });
    }
  }
};
module.exports = StatusController;
