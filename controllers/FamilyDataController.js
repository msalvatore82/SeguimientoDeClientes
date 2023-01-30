const Client = require("../models/Client");
const FamilyData = require("../models/FamilyData");

const FamilyDataController = {
  async createFamilyData(req, res) {
    try {
      const familyData = await FamilyData.create({
        ...req.body
      });
      const client = await Client.findById(req.body.clientId);
      client.familyData.push(familyData._id);
      await client.save();
      res.status(200).send({ msg: "Informacion personal del cliente", familyData});
    } catch (error) {
      res.status(500).send(error);
    }
  }
};
module.exports = FamilyDataController;
