import Joi from 'joi'

export const param = Joi.object({
    description: Joi.string().required(),
    type: Joi.string().required(),
    default: Joi.string().required(),
    required: Joi.boolean().required()
})

export const request = Joi.object({
    method: Joi.string().required(),
    url: Joi.string().required(),
    headers: Joi.object().pattern(Joi.string(), param),
    query: Joi.object().pattern(Joi.string(), param),
    params: Joi.object().pattern(Joi.string(), param)
})

export const query = Joi.object({
    name: Joi.string().required()
})

export const queryAll = Joi.object({
    name: Joi.string()
})

export const interaction = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    request: request.required()
})

export const interactionWithoutRequire = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    request: request.required()
})
