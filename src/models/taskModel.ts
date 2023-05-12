import * as mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  name: String,
  userId: mongoose.Types.ObjectId,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Task", taskSchema);
