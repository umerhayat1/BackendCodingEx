const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
exports.register = async (email: string, password: string) => {
  let user = {
    email: email,
    password: password,
  };
  let userData = await userModel.create(user);
  return userData;
};

exports.login = async (email: string, password: string) => {
  let user = await userModel.find({ email: email });
  const token = jwt.sign(
    { userId: user[0]._id},
    "secret",
    { expiresIn: "1h" }
  );
  return { user: user[0], token: token };
};

exports.getUser = async (req: Request, res: Response) => {
  console.log("=========getUser===============");
};
