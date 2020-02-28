const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storySchema = new mongoose.Schema({
  story_ID: Number,
  text: String,
  options: [
    {
      text: String,
      storyID: Number
    }
  ]
});

const Story = mongoose.model("Story", storySchema);

module.exports = Story;
