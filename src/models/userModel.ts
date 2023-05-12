import * as mongoose from "mongoose";
// const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
	email:String,
    password:String,
	createdAt: {
		type: Date,
		default: Date.now,
	}
});

module.exports = mongoose.model("User", userSchema);
