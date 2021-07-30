import { Comic } from '../models/comics.js'
import { Profile } from '../models/profile.js'




export{
    index,
    create,
    edit,
    deleteComic as delete,
    update,
    
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
  .then((comics ,author,released,price)=>{
      res.render('comics/index.ejs',{
          comics,
          author,
          released,
          price
          
          
      })
  })
}

function create(req, res) {
  Comic.create(req.body)
  .then(()=>{
    res.redirect('/comics')
  })
}
  

  
