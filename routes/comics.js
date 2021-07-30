import { Router } from 'express'
import * as comicCtrl from '../contollers/comics.js'
const router = Router()

router.get('/', isLoggedIn, comicCtrl.index)
router.get('/:id/edit', isLoggedIn,comicCtrl.edit)
router.post('/', isLoggedIn,comicCtrl.create)
router.put('/:id', isLoggedIn,comicCtrl.update)
router.delete('/:id', isLoggedIn,comicCtrl.delete)





function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}


export {
  router
}
