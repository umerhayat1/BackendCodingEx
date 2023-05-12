const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
exports.register = async (email: string, password: string) => {
  let user = {
    email: email,
    password: password,
  };
  let userData = await userModel.create(user);
  return { _id: userData._id, email: userData.email };
};

exports.login = async (email: string, password: string) => {
  let user = await userModel.find({ email: email });
  const token = jwt.sign({ userId: user[0]._id }, "secret", {
    expiresIn: "1h",
  });
  return { jwt: token };
};

exports.getUser = async (id: String) => {
  let user = await userModel.find({ _id: id }, { _id: 1, email: 1 });
  return user[0];
};
