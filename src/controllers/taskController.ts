import { Request, Response } from "express";
const { responses } = require("../config/constants");
//@ts-ignore
import taskService from "../services/taskService";
export const createTask = async (req: Request, res: Response) => {
  const { name } = req.body;
  try {
    let task = await taskService.createTask(name, req.userId);
    res.send(responses.success("Ok", task));
  } catch (err) {
    res.send(responses.error());
    console.log("Error:", err);
  }
};

export const listTasks = async (req: Request, res: Response) => {
  try {
    let tasks = await taskService.listTasks(req.userId);
    res.send(responses.success("Ok", tasks));
  } catch (err) {
    res.send(responses.error());
    console.log("Error:", err);
  }
};