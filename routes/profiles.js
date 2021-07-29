import { Router } from 'express'
import * as profilesCtrl from '../controllers/proflies.js' 

export {
  router
}

const router = Router()

router.get('/',  profilesCtrl.index)
router.get('/:id',  profilesCtrl.show)
router.get('/:id/edit', profilesCtrl.edit)