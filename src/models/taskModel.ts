import * as mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
	name:String,
    details:String,
	createdAt: {
		type: Date,
		default: Date.now,
	}
});

module.exports = mongoose.model("Task", taskSchema);
