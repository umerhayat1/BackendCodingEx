const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
//@ts-ignore
import { secretKey } from "../config/constants";

const register = async (email: string, password: string) => {
  let userExist = await userModel.find({ email: email });
  if (!userExist[0]) {
    let user = {
      email: email,
      password: password,
    };
    let userData = await userModel.create(user);
    return { _id: userData._id, email: userData.email };
  }
};

const login = async (email: string, password: string) => {
  let user = await userModel.find({ email: email,password:password });
  if (user[0]) {
    const token = jwt.sign({ userId: user[0]._id }, secretKey, {
      expiresIn: "1h",
    });
    return { jwt: token };
  }
};

const getUser = async (id: String) => {
  let user = await userModel.find({ _id: id }, { _id: 1, email: 1 });
  return user[0];
};

module.exports = { register, login, getUser };
