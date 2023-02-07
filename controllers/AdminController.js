const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const transporter = require("../config/nodemailer");


const AdminController = {
    async register(req, res, next) {
        try {
          const password = await bcrypt.hash(req.body.password, 10);
          const admin = await Admin.create({
            ...req.body,
            password,
            confirmed: false,
            role: "admin",
          });
          const emailToken = jwt.sign(
            { email: req.body.email },
            process.env.JWT_SECRET,
            { expiresIn: "48h" }
          );
          const url = "http://localhost:3000/admin/confirm/" + emailToken;
          await transporter.sendMail({
            to: req.body.email,
            subject: "Confirme su registro",
            html: `<img src="../img/logo.jpg" alt="logo image">
            <br>
            <h2>Estás a un paso de registrarte 🚶​ </h2>
            <h2><a href="${url}">👉 ​​Click aqui para confirmar tu registro 👈</a></h2>
            `,
          });
          res.status(201).send({ msg: "Se le ha enviado un correo para confirmar su Usuario", admin });
        } catch (error) {
          console.error(error);
          next(error);
        }
      },
      async confirm(req, res) {
        try {
          const token = req.params.emailToken;
          const payload = jwt.verify(token, process.env.JWT_SECRET);
          await Admin.updateOne(
            { email: payload.email },
    
            {
              confirmed: true,
            }
          );
    
          res.status(201).send("Adminitrador confirmado con éxito");
        } catch (error) {
          console.error(error);
        }
      },
      async login(req, res) {
        try {
          const admin = await Admin.findOne({
            email: req.body.email,
          });
          if (!admin) {
            return res.status(400).send({ msg: "Datos incorrectos" });
          }
          if (!admin.confirmed) {
            return res.status(400).send({ message: "Debes confirmar tu correo" });
          }
          const isMatch = await bcrypt.compare(req.body.password, admin.password);
          if (!isMatch) {
            return res.status(400).send({ msg: "Datos incorrectos" });
          }
          const token = jwt.sign({ _id: admin._id }, process.env.JWT_SECRET);
          const tokenShift = () => {
            admin.tokens.shift;
          };
          if (admin.tokens.length > 4) tokenShift();
          admin.tokens.push(token);
          await admin.save();
          res.send({ msg: "Bienvenid@ " + admin.name, token, admin });
        } catch (error) {
          console.error(error);
          res.status(500).send({ msg: "Ha habido un error al logearte", error });
        }
      },
    
      async logout(req, res) {
        try {
          await Admin.findByIdAndUpdate(req.admin._id, {
            $pull: { tokens: req.headers.authorization },
          });
          res.send({ msg: "Desconectado con éxito" });
        } catch (error) {
          console.error(error);
          res
            .status(500)
            .send({ msg: "Hubo un problema al intentar desconectar el usuario" });
        }
      },

}

module.exports = AdminController;