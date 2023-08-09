import { prop, modelOptions, getModelForClass } from '@typegoose/typegoose'
import { Request } from './request'

@modelOptions({
    schemaOptions: { collection: 'interaction', versionKey: false },
    options: { allowMixed: 0 }
})
export class Interaction {
    @prop({ required: true, unique: true })
    public name!: string

    @prop({ required: true })
    public description!: string

    @prop({ required: true })
    public request!: Request
}

export * from './param'
export * from './request'

export const InteractionModel = getModelForClass(Interaction)
