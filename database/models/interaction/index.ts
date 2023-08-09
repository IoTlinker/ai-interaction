import { prop, modelOptions, getModelForClass } from '@typegoose/typegoose'

@modelOptions({
    schemaOptions: { collection: 'interaction', versionKey: false, _id: false },
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