'use strict';

import jwt from 'jwt-simple';

import { userModel } from '../../../models/index';
import { secret } from '../../../config/config';

const buildResponse = (statusCode, data, res) => {
  if (statusCode === 200) {
    return res.status(200).json({
      data: data
    })
  } else {
    return res.status(statusCode).json({
      data: data
    })
  }
}

export const saveUser = (req, res) => {
  userModel.findOne({name: req.body.name})
    .then(user => {
      if (user) {
        buildResponse(400, 'That name is already taken', res);
      } else {
        const user = new userModel({
          name: req.body.name,
          fullname: req.body.fullname,
          password: req.body.password,
          initials: req.body.initials,
          email: req.body.email
        });

        return user.save();
      }
    })
    .then(user => buildResponse(200, jwt.encode(user._id, secret), res))
    .catch(err => buildResponse(500, err, res));
};