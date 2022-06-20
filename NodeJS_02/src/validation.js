const Joi = require('joi');

exports.person = Joi.object()
    .keys({
        uuid: Joi.number().required(),
        login: Joi.string().required(),
        password: Joi.string().alphanum().required(),
        age: Joi.number().required().min(4).max(130),
        isDeleted: Joi.boolean()
    });
