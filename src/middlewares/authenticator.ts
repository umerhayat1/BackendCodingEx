import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { secretKey } from "../config/constants";

//request authenticator
export const authenticator = (req: any, res: any, next: () => void) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, secretKey) as { userId: string };
    req.userId = decoded.userId;
    next();
  } catch (err) {
    res.status(401).json({ message: "Unauthorized" });
  }
};
