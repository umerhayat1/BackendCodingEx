const taskModel = require("../models/taskModel");

exports.createTask = async (name: String) => {
  let task = {
    name: name,
  };
  let taskData = await taskModel.create(task);
  return { _id: taskData._id, name: taskData.name };
};

exports.listTasks = async (req: Request, res: Response) => {
  console.log("==========listTasks==============");
  let tasks = await taskModel.find().select({ _id: 1, name: 1 });
  return tasks;
};
