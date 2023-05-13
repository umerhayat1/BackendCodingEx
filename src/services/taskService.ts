const taskModel = require("../models/taskModel");

const createTask = async (name: String, userId: String) => {
  //creating task object.
  let task = {
    userId: userId,
    name: name,
  };
  let taskData = await taskModel.create(task);
  return { _id: taskData._id, name: taskData.name };
};

const listTasks = async (userId: String) => {
  // finding tasks by userId, selecting only _id and name fields and return.
  let tasks = await taskModel
    .find({ userId: userId })
    .select({ _id: 1, name: 1 });
  return tasks;
};

export default { createTask, listTasks };