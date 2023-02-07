const Client = require("../models/Client");
const PersonalData = require("../models/PersonalData");

const PersonalDataController = {
  async createPersData(req, res) {
    try {
      const personalData = await PersonalData.create({
        ...req.body,
      });
      await Client.updateOne(
        { _id: req.body.clientId },
        { $push: { personalData: personalData._id } }
      );
      res.send({ msg: "Informacion personal del cliente", personalData });
    } catch (error) {
      console.error(error);
      res.status(500).send({ msg: "Error al cargar datos del cliente", error });
    }
  },
};
module.exports = PersonalDataController;
