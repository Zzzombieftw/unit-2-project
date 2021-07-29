import { Profile } from "../models/profile.js"

export{
    index,
}



function index(req, res){
    Profile.find({})
    .then(profiles => {
      res.render('profiles/index', {
        title: "FoF profiles",
        profiles
      })
    })
  }