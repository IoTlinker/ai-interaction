import { Router } from 'express'

import { InteractionController } from '../controllers/interaction'

import { requireAcces } from '../middlewares/access'

const router = Router()

router.get('/query', requireAcces(['interaction', 'read']), InteractionController.queryInteraction)
router.get('/query/all/', requireAcces(['interaction', 'read', 'all']), InteractionController.queryInteractions)
router.post('/', requireAcces(['interaction', 'create']), InteractionController.createInteraction)
router.put('/', requireAcces(['interaction', 'update']), InteractionController.updateInteraction)
router.delete('/', requireAcces(['interaction', 'delete']), InteractionController.deleteInteraction)

export { router }
