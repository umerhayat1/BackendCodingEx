import express from "express";
const router = express.Router();

import { authenticator } from "../middlewares/authenticator";

import * as taskController from "../controllers/taskController";
import * as userController from "../controllers/userController";

router.post("/user/register", userController.register);
router.post("/user/login", userController.login);
router.get("/user/getUser", authenticator, userController.getUser);

router.post("/task/create-task", taskController.createTask);
router.get("/task/list-tasks", taskController.listTasks);

module.exports = router;
