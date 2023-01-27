const Client = require("../models/Client");

const ClientController = {
  async createClient(req, res) {
    try {
      const client = await Client.create(req.body);
      res.send({ msg: "Cliente creado con exito", client });
    } catch (error) {
      console.error(error);
      res.status(500).send({ msg: "Error al crear el cliente", error });
    }
  },
};
module.exports = ClientController;
