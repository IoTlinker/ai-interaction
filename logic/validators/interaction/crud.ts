import Joi from 'joi'

import { param, request, query, queryAll, interaction, interactionWithoutRequire } from './common'

export const createInteraction = Joi.object({
    query: query,
    body: interaction.required()
})

export const updateInteraction = Joi.object({
    query: query.required(),
    body: interactionWithoutRequire.required()
})

export const deleteInteraction = Joi.object({
    query: query.required()
})

export const getInteraction = Joi.object({
    query: query.required()
})

export const getInteractions = Joi.object({
    query: queryAll.required()
})
