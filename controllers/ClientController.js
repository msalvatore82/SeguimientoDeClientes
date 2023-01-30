const Client = require("../models/Client");

function calculateAge(birthday) {
  const today = new Date();
  const birthDate = new Date(birthday);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

const ClientController = {
  async createClient(req, res) {
    try {
      let age;
      let birthdate;
      if (req.body.birthday) {
        birthdate = new Date(req.body.birthday.replace(/\//g, "-"));
        age = calculateAge(birthdate);
      } else if (req.body.age) {
        age = req.body.age;
      }
      const client = await Client.create({
        ...req.body,
        birthday: birthdate,
        age: age,
      });
      res.send({ msg: "Cliente creado con éxito", client });
    } catch (error) {
      console.error(error);
      res.status(500).send({ msg: "Error al crear el cliente", error });
    }
  },
  async getClientbyId(req, res) {
    try {
      const client = await Client.findById(req.params._id)
        .populate("personalData")
        .populate("familyData")
        .populate("actions")
        .populate("status")
        .populate("qualification")
        .populate("followUpActions")
      res.send({ msg: "Su cliente", client });
    } catch (error) {
      console.error(error);
      res.status(500).send({ msg: "Error al cargar el cliente", error });
    }
  },
  async updateClient(req, res) {
    try {
      if (req.body.birthday) {
        const age = calculateAge(req.body.birthday);
        req.body.age = age;
      }
      const client = await Client.findByIdAndUpdate(req.params._id, req.body, {
        new: true,
      });
      res.send({ message: "Cliente actualizado ", client });
    } catch (error) {
      console.error(error);
    }
  },
  
};
module.exports = ClientController;
