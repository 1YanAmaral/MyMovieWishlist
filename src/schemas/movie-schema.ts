import Joi from 'joi';

export const MovieSchema = Joi.object({
    name: Joi.string().required(),
    platform: Joi.string().required(),
    genre: Joi.string().required(),
})