const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RandomEventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  action: {
    type: String,
    default: "",
    required: true
  },
  value:{
      type: Number,
      default:""
  }
});

const RandomEvent = mongoose.model("RandomEvent", RandomEventSchema);

module.exports = RandomEvent;
