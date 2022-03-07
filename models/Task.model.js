const { Schema, model } = require("mongoose");
const { Schema, model } = mongoose;

const taskSchema = new Schema({
  title: {String, required: true},
  description: String,
  project: {type: Schema.Type.ObjectId, ref: "Project", required: true}
});


module.exports = model("Task", taskSchema);


