const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const HealthRouter = require("./routes/health");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

//Middle ware

app.use(cors());
app.use(express.json());

//MongoDb Connection

const uri =
  process.env.ALTAS_URI ||
  "mongodb+srv://admin:071302Justin@cluster0.mrwktkb.mongodb.net/covid?retryWrites=true&w=majority";

mongoose.connect(uri);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection success.");
});

app.use("/health", HealthRouter);

app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});
