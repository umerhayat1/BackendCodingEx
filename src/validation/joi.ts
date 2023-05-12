import { Schema, ValidationResult, ObjectSchema } from "joi";
import { RequestHandler } from "express";
import Joi from "joi";

export function validate(schema: Schema): RequestHandler {
  return (req, res, next) => {
    const result: ValidationResult = schema.validate(req.body);
    if (result.error) {
      return res.status(400).json({ error: result.error.details[0].message });
    }
    next();
  };
}

export const register: ObjectSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

export const login: ObjectSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

export const createTask: ObjectSchema = Joi.object({
  name: Joi.string().required(),
});
