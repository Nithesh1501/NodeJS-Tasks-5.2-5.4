import Joi from 'joi';

export const userSchema = Joi.object({
    login: Joi.string()
        .required(),

    password: Joi.string()
        .alphanum()
        .pattern(/^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]+$/)
        .min(6)
        .required(),

    age: Joi.number()
        .integer()
        .min(4)
        .max(130)
        .required()
});
