import * as validators from '../../validators/interaction'
import { validate } from '../../helpers/validator'
import * as types from '../../types/interaction'

import { InteractionModel, Interaction } from '../../../database/models/interaction'

import { errorHelper } from './common'

export async function createInteraction(params: types.createInteraction): Promise<Interaction> {
    const value = validate(params, validators.createInteraction) as types.createInteraction

    const result = (await InteractionModel.create(value.body)) as Interaction
    errorHelper.createError(result)

    return result
}

export async function updateInteraction(params: types.updateInteraction): Promise<boolean> {
    const value = validate(params, validators.updateInteraction) as types.updateInteraction

    const result = await InteractionModel.updateOne(value.query, { $set: value.body })
    errorHelper.updateError(result)

    return result.modifiedCount > 0
}

export async function deleteInteraction(params: types.deleteInteraction): Promise<boolean> {
    const value = validate(params, validators.deleteInteraction) as types.deleteInteraction

    const result = await InteractionModel.deleteOne(value.query)
    errorHelper.deleteError(result)

    return result.deletedCount > 0
}

export async function queryInteraction(params: types.getInteraction): Promise<Interaction> {
    const value = validate(params, validators.getInteraction) as types.getInteraction

    const result = (await InteractionModel.findOne(value.query)) as Interaction
    errorHelper.getError(result)

    return result
}

export async function queryInteractions(params: types.getInteractions): Promise<Interaction[]> {
    const value = validate(params, validators.getInteractions) as types.getInteractions

    const result = (await InteractionModel.find(value.query)) as Interaction[]
    errorHelper.getAllError(result)

    return result
}
