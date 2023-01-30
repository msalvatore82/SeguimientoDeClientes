const Client = require("../models/Client");
const PersonalData = require("../models/PersonalData");

const PersonalDataController = {
  async createPersData(req, res) {
    try {
      const personalData = await PersonalData.create({
        ...req.body,
      });
      const client = await Client.findById(req.body.clientId);
      client.personalData.push(personalData._id);
      await client.save();
      res.send({ msg: "Informacion personal del cliente", personalData });
    } catch (error) {
      console.error(error);
      res.status(500).send({ msg: "Error al cargar datos del cliente", error });
    }
  },
};
module.exports = PersonalDataController;
