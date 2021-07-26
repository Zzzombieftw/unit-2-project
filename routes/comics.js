import { Router } from 'express'
import * as comicCtrl from '../contollers/comics.js'
const router = Router()




router.post('/:id/addToCollection', isLoggedIn, comicCtrl.addToCollection)
router.delete('/:id/removeFromCollection', isLoggedIn, comicCtrl.removeFromCollection)




function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}


export {
  router
}
