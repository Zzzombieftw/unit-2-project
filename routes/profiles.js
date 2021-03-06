import { Router } from 'express'
import * as profilesCtrl from '../contollers/profiles.js' 

export {
  router
}

const router = Router()

router.get('/', isLoggedIn, profilesCtrl.index)

router.get('/:id/edit', isLoggedIn,profilesCtrl.edit)

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }