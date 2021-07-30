import { Router } from 'express'
const router = Router()

/* GET home page. */
router.get('/', function(req, res,) {
  res.render('index', { title: 'Comic Books' })
  res.render('comics/index')
})

export { 
  router
}
