import { Profile } from "../models/profile.js"

export{
    index,
    
    edit,
    update,

}

function update(req, res) {
  Profile.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(profile => {
    res.redirect(`/profiles/${profile._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}



function index(req, res){
    Profile.find({})
    .then(profiles => {
      res.render('profiles/index.ejs', {
        
        profiles
      })
    })
  }
  

  function edit(req, res) {
    Profile.findById(req.params.id)
    .then(profile => {
      res.render('profiles/edit', {
        title: `Editing ${profile.name}'s profile`,
        profiles
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
  }