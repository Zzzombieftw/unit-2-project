import mongoose from 'mongoose'
const Schema = mongoose.Schema
export {
  Profile
}

const profileSchema = new Schema({
  name: String,
  avatar: String,
  
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)