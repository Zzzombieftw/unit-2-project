import { Comic } from '../models/comics.js'
import { Profile } from '../models/profile.js'
export{
    index,
    addToCollection,
    removeFromCollection,
    show,
}
function show(req, res) {
    
}

function index(req, res, next) {
    let modelQuery = req.query.name
    ? {name: new RegExp(req.query.name, "i")}
    : {}
    Profile.find(modelQuery)
    .sort("name")
    .exec(function(err, porfile){
        if (err) return next (err)
    })
      res.render('comic/index', {
        students: students,
        name: req.query.name,
        user: req.user
      })
    }
  
function addToCollection(req, res) {
    // Add id of the logged in user to req.body for creating a game for the first time (if it doesn't exist in the database)
    req.body.collectedBy = req.user.profile._id
    // Look to see if the game already exists in the database
    Game.findOne({ rawgId: req.params.id })
    .then(game => {
      // If it does, push the user's profile id to game.collectedBy
      if (game) {
        game.collectedBy.push(req.user.profile._id)
        game.save()
        .then(() => {
          res.redirect(`/games/${req.params.id}`)
        })
      } else {
        // If it doesn't exist in the database, create it!
        Game.create(req.body)
        .then(() => {
          res.redirect(`/games/${req.params.id}`)
        })
      }
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
  }
  
  function removeFromCollection(req, res) {
    // Find the game in the database
    Game.findOne({ rawgId: req.params.id })
    .then(game => {
      // Remove the user's profile id from collectedBy
      game.collectedBy.remove({_id: req.user.profile._id})
      game.save()
      .then(() => {
        res.redirect(`/games/${req.params.id}`)
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
  }
  