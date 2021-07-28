import { Comic } from '../models/comics.js'
import { Profile } from '../models/profile.js'
export{
    index,
    create,
    show,
    edit,
    deleteComic as delete,
    update
}
function show(req, res) {
    
}


function update(req, res) {
  Comic.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then((comics)=>{
    res.redirect("/comics")
  })
}

function deleteComic(req, res) {
  Comic.findByIdAndDelete(req.params.id)
  .then(()=>{
    res.redirect('/comics')
  })
}

function edit(req, res) {
  Comic.findById(req.params.id)
  .then(comics =>{
    res.render('comics/edit',{
      comics,
      
    })
  })
}

function index(req, res) {
   Comic.find({})
  .then(comics=>{
      res.render('comics/index.ejs',{
          comics,
          
      })
  })
}

function create(req, res) {
  Comic.create(req.body)
  .then(()=>{
    res.redirect('/comics')
  })
}
  
// function addToCollection(req, res) {
//     // Add id of the logged in user to req.body for creating a game for the first time (if it doesn't exist in the database)
//     req.body.collectedBy = req.user.profile._id
//     // Look to see if the game already exists in the database
//     Comic.findOne({ rawgId: req.params.id })
//     .then(game => {
//       // If it does, push the user's profile id to game.collectedBy
//       if (game) {
//         comic.collectedBy.push(req.user.profile._id)
//         comic.save()
//         .then(() => {
//           res.redirect(`/comics/${req.params.id}`)
//         })
//       } else {
//         // If it doesn't exist in the database, create it!
//         Comic.create(req.body)
//         .then(() => {
//           res.redirect(`/comics/${req.params.id}`)
//         })
//       }
//     })
//     .catch(err => {
//       console.log(err)
//       res.redirect('/')
//     })
//   }
  
