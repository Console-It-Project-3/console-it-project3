const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const characterSchema = new mongoose.Schema({
  // user: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'User'
  // },
  // equipment: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'equipment'
  // },

  // name: {
  //   type: String,
  //   required: true,
  //   unique: true
  // },
  class: {
    type: String,
    // default: ""
  },
  url:{
    type: String,
    // default:''
  }
  // attack: {
  //   type: Number,
  //   default: ""
  // },
  // defence: {
  //   type: Number,
  //   default: ""
  // },

  // health: {
  //   type: Number,
  //   default: ""
  // },

  // magic: {
  //   type: Number,
  //   default: ""
  // }
});

const Character = mongoose.model("Character", characterSchema);

module.exports = Character;
