import { Router } from 'express'
import * as comicCtrl from '../contollers/comics.js'
const router = Router()

router.post('/search',isLoggedIn ,comicCtrl.search)
router.get('/', isLoggedIn, comicCtrl.index)
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
