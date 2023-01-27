const express = require("express");
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const { typeError } = require("./middlewares/errors");
const { dbConnection } = require("./config/config");
const cors = require('cors');

app.use(express.json(), cors());

dbConnection();

app.use("/admin", require("./routes/admin"));
app.use("/clients", require("./routes/clients"));
app.use("/contact", require("./routes/contact"));



app.use(typeError);



app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
