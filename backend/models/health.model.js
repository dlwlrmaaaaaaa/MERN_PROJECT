const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const healthSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
      trim: true,
    },
    temperature: {
      type: Number,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    phonenumber: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);
//name ng table ay health, if not exist will create
const Health = mongoose.model("health", healthSchema);
module.exports = Health;
