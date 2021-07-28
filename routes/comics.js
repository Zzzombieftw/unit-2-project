import { Router } from 'express'
import * as comicCtrl from '../contollers/comics.js'
const router = Router()


router.get('/', comicCtrl.index)
router.get('/:id', comicCtrl.show)
router.get('/:id/edit', comicCtrl.edit)
router.post('/', comicCtrl.create)
router.put('/:id', comicCtrl.update)
router.delete('/:id', comicCtrl.delete)





function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}


export {
  router
}
