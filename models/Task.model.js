const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
  title: {type: String, required: true},
  description: String,
  project: {type: Schema.Types.ObjectId, ref: "Project", required: true}
});


module.exports = model("Task", taskSchema);


