import * as interactionLogic from '../../logic/models/interaction'
import { ahandler } from '../../errors/handle'

import { formatter } from './returnFormat'

export class InteractionController {
    @ahandler
    static async createInteraction(req: any, res: any) {
        res.json(
            formatter(
                await interactionLogic.createInteraction({
                    query: req.query,
                    body: req.body
                })
            )
        )
    }

    @ahandler
    static async updateInteraction(req: any, res: any) {
        res.json(
            formatter(
                await interactionLogic.updateInteraction({
                    query: req.query,
                    body: req.body
                })
            )
        )
    }

    @ahandler
    static async deleteInteraction(req: any, res: any) {
        res.json(
            formatter(
                await interactionLogic.deleteInteraction({
                    query: req.query
                })
            )
        )
    }

    @ahandler
    static async queryInteraction(req: any, res: any) {
        res.json(
            formatter(
                await interactionLogic.queryInteraction({
                    query: req.query
                })
            )
        )
    }

    @ahandler
    static async queryInteractions(req: any, res: any) {
        res.json(
            formatter(
                await interactionLogic.queryInteractions({
                    query: req.query
                })
            )
        )
    }
}
