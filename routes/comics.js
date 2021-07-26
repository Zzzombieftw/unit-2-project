import { Router } from 'express'
import * as comicCtrl from '../contollers/comics.js'
const router = Router()

router.post('/search', isLoggedIn, comicCtrl.search)
router.get('/:id', isLoggedIn, gamesCtrl.show)
router.post('/:id/addToCollection', isLoggedIn, gamesCtrl.addToCollection)
router.delete('/:id/removeFromCollection', isLoggedIn, gamesCtrl.removeFromCollection)





function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}


export {
  router
}
