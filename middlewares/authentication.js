const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");
require("dotenv").config();

const authentication = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const admin = await Admin.findOne({ _id: payload._id, tokens: token });
    if (!admin) {
      return res.status(401).send({ msg: "No estas autorizado" });
    }
    req.admin =admin;
    next();
  } catch (error) {
    return res.status(500).send({ msg: "Ha habido un problema con el token" });
  }
};

// const isAdmin = async (req, res, next) => {
//   const admins = ["admin", "superadmin"];
//   if (!admins.includes(req.admin.role)) {
//     return res.status(403).send({
//       msg: "No tienes permiso para realizar esta acción",
//     });
//   }
//   next();
// };

module.exports = { authentication };
