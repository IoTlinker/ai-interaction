import { prop, modelOptions } from '@typegoose/typegoose'
import { Param } from './param'

@modelOptions({ schemaOptions: { _id: false }, options: { allowMixed: 0 } })
export class Request {
    constructor(method: string, url: string, query?: Map<string, Param>, params?: Map<string, Param>) {
        this.method = method
        this.url = url
        this.query = query
        this.params = params
    }

    @prop({ required: true })
    public method!: string

    @prop({ required: true, regexp: /^https?:\/\/.+/ })
    public url!: string

    @prop({ required: false })
    public query?: Map<string, Param>

    @prop({ required: false })
    public params?: Map<string, Param>

    get queryParams() {
        if (!this.query) return {}

        var result: any = {}
        this.query.forEach((value, key) => {
            result[key] = value.default
        })

        return result
    }

    get paramsParams() {
        if (!this.params) return {}

        var result: any = {}
        this.params.forEach((value, key) => {
            result[key] = value.default
        })

        return result
    }
}
