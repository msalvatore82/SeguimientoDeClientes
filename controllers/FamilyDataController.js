const Client = require("../models/Client");
const FamilyData = require("../models/FamilyData");

const FamilyDataController = {
  async createFamilyData(req, res) {
    try {
      const familyData = await FamilyData.create({
        ...req.body
      });
      await Client.updateOne(
        { _id: req.body.clientId },
        { $push: { familyData: familyData._id } }
      );
      res.status(200).send({ msg: "Informacion personal del cliente", familyData});
    } catch (error) {
      res.status(500).send(error);
    }
  }
};
module.exports = FamilyDataController;
