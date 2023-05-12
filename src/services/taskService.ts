const taskModel = require("../models/taskModel");

exports.createTask = async (name: String, userId: String) => {
  let task = {
    userId: userId,
    name: name,
  };
  let taskData = await taskModel.create(task);
  return { _id: taskData._id, name: taskData.name };
};

exports.listTasks = async (userId: String) => {
  let tasks = await taskModel
    .find({ userId: userId })
    .select({ _id: 1, name: 1 });
  return tasks;
};
