import { prop } from '@typegoose/typegoose'

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
