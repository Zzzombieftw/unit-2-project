import mongoose from 'mongoose'
const Schema = mongoose.Schema
export {
  Profile
}

const profileSchema = new Schema({
  name: String,
  avatar: String,
  comics: [{type: Schema.Types.ObjectId, ref: "Comic"}],
  friends: [{type: Schema.Types.ObjectId, ref: "Profile"}]
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)