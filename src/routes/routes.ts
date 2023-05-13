import express from "express";
const router = express.Router();

import { authenticator } from "../middlewares/authenticator";

import * as taskController from "../controllers/taskController";
import * as userController from "../controllers/userController";

import { validate } from "../middlewares/validator";
import { register, login, createTask } from "../middlewares/validator";

router.post("/user/register", validate(register), userController.register);
router.post("/user/login", validate(login), userController.login);
router.get("/user/getUser", authenticator, userController.getUser);

router.post(
  "/task/create-task",
  validate(createTask),
  authenticator,
  taskController.createTask
);
router.get("/task/list-tasks", authenticator, taskController.listTasks);

module.exports = router;
