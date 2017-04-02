import Joi from 'joi';

export const saveUserSchema = {
  body: {
    name: Joi.string().required(),
    fullname: Joi.string().required(),
    initials: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required()
  }
};