const Client = require("../models/Client");
const QualificationSchema = require("../models/Qualification");

const QualificationController = {
  async createQualification(req, res) {
    try {
      const qualification = await QualificationSchema.create({
        ...req.body
      });
      const client = await Client.findById(req.body.clientId);
      client.qualification.push(qualification._id);
      await client.save();
      res.status(200).send({ msg: "El cliente esta", qualification });
    } catch (error) {
      res.status(500).send(error);
    }
  }
};
module.exports = QualificationController;