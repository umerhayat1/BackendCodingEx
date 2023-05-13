const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
//@ts-ignore
import { secretKey } from "../config/constants";
import { encryptPassword, matchPassword } from "../utils/encryption";

const register = async (email: string, password: string) => {
  //checking if user already exist with similar email.
  let userExist = await userModel.find({ email: email });

  if (!userExist[0]) {
    //encrypt password before storing.
    let hashedPassword = await encryptPassword(password);
    let user = {
      email: email,
      password: hashedPassword,
    };
    let userData = await userModel.create(user);
    return { _id: userData._id, email: userData.email };
  }
};

const login = async (email: string, password: string) => {
  //checking if user exist with this email and password is correct.
  let user = await userModel.find({ email: email });
  //check if user exists with the email.
  if (user[0]) {
    //check if password is correct.
    let isMatchPassword = await matchPassword(password, user[0].password);
    if (isMatchPassword) {
      //create token and return.
      const token = jwt.sign({ userId: user[0]._id }, secretKey, {
        expiresIn: "1h",
      });
      return { jwt: token };
    }
  }
};

const getUser = async (id: String) => {
  //finding user and return.
  let user = await userModel.find({ _id: id }, { _id: 1, email: 1 });
  return user[0];
};

export default { register, login, getUser };
