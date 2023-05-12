import { Request, Response } from "express";
const { responses } = require("../config/constants");

import {taskService} from "../services/taskService";
export const createTask = async(req: Request, res: Response) => {
    console.log("createTask");
    const { name } = req.body;
    try {
      await taskService.createTask(name);
      res.send(responses.success("Ok"));
    } catch (err) {
      res.send(responses.error());
      console.log("Error:", err);
    }
};

export const listTasks = async(req: Request, res: Response) => {
    console.log("list Tasks");
    try {
      await taskService.listTasks();
      res.send(responses.success("Ok"));
    } catch (err) {
      res.send(responses.error());
      console.log("Error:", err);
    }
};