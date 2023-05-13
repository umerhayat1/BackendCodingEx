import bcrypt from "bcrypt";
import { saltRounds } from "../config/constants";

export const encryptPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

export const matchPassword = async (
  plainPassword: string,
  hashedPassword: string
) => {
  const passwordsMatch = await bcrypt.compare(plainPassword, hashedPassword);
  return passwordsMatch;
};
