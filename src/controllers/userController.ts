import { Request, Response } from "express";
const { responses } = require("../config/constants");
//@ts-ignore
import userService from "../services/userService";
export const register = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    let user = await userService.register(email, password);
    if (user) {
      res.send(responses.success("Ok", user));
    } else {
      res.send(responses.failure("This email is already registered!"));
    }
  } catch (err) {
    res.send(responses.error());
    console.log("Error:", err);
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    let data = await userService.login(email, password);
    if (data) {
      res.send(responses.success("Ok", data));
    } else {
      res.send(responses.failure("Email or password is incorrect!"));
    }
  } catch (err) {
    res.send(responses.error());
    console.log("Error:", err);
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    let data = await userService.getUser(req.userId);
    res.send(responses.success("Ok", data));
  } catch (err) {
    res.send(responses.error());
    console.log("Error:", err);
  }
};
