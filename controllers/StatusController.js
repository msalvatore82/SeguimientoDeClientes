const Client = require("../models/Client");
const Status = require("../models/Status");

const StatusController = {
  async createStatus(req, res) {
    try {
      const status = await Status.create({
        ...req.body
      });
      await Client.updateOne(
        { _id: req.body.clientId },
        { $push: { status: status._id } }
      );
      res.status(200).send({ msg: "El cliente esta", status });
    } catch (error) {
      res.status(500).send({ msg: "Hay un problema", error });
    }
  },
  async updateStatus(req, res) {
    try {
      const { client, status } = req.body;
      const clientOne = await Client.findByIdAndUpdate(
        client,
        { $set: { status: status } }, // Actualizar el valor de status
        { new: true } // Devolver el documento actualizado
      );
      res.send({ message: "Status actualizado", clientOne });
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: "Ha habido un problema al actualizar el status del cliente",
      });
    }
  }
  
};


module.exports = StatusController;
