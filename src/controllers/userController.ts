import { Request, Response } from "express";
const { responses } = require("../config/constants");
//@ts-ignore
import userService from "../services/userService";
export const register = async(req: Request, res: Response) => {
    console.log("register");
    const { email,password } = req.body;
    try {
      let user=await userService.register(email,password );
      res.send(responses.success("Ok",user));
    } catch (err) {
      res.send(responses.error());
      console.log("Error:", err);
    }
};

export const login = async(req: Request, res: Response) => {
    console.log("login");
    const { email,password } = req.body;
    try {
      let data=await userService.login(email,password);
      res.send(responses.success("Ok",data));
    } catch (err) {
      res.send(responses.error());
      console.log("Error:", err);
    }
};


export const getUser = async(req: Request, res: Response) => {
    console.log("getUser");
    const { name } = req.body;
    try {
      await userService.getUser(name);
      res.send(responses.success("Ok"));
    } catch (err) {
      res.send(responses.error());
      console.log("Error:", err);
    }
};
