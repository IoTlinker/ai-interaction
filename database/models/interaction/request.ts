import { prop } from '@typegoose/typegoose'

import { Param } from './param'

export class Request {
    @prop({ required: true })
    public method!: string

    @prop({ required: true, regexp: /^https?:\/\/.+/ })
    public url!: string

    @prop({ required: false })
    public headers?: Map<string, Param>

    @prop({ required: false })
    public query?: Map<string, Param>

    @prop({ required: false })
    public params?: Map<string, Param>
}
