import { prop, modelOptions } from '@typegoose/typegoose'

@modelOptions({ schemaOptions: { _id: false }, options: { allowMixed: 0 } })
export class Param {
    @prop({ required: true })
    public description!: string

    @prop({ required: true })
    public type!: string

    @prop({ required: true })
    public default!: string

    @prop({ required: true })
    public required!: boolean
}
