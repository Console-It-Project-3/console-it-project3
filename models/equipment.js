const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const equipmentSchema = new mongoose.Schema({
  character: {
    type: Schema.Types.ObjectId, 
    ref: 'Character'
  },
  name: {
    type: String,
    required: true,
  },
  class: {
    type: [String],
    default: "",
    required: true
  },
  Equip: {
      type: String,
      default: ""
  },
  attack: {
    type: Number,
    default: ""
  },
  defence: {
    type: Number,
    default: ""
  },
  health: {
    type: Number,
    default: ""
  },
  magic: {
    type: Number,
    default: ""
  }
});

const Equipment = mongoose.model("Equipment", equipmentSchema);

module.exports = Equipment;
