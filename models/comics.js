import mongoose from 'mongoose'
const Schema = mongoose.Schema;

export {
	Comic
}

const comicSchema = new Schema({
  name: String,
  author: String,
  rawgId: Number,
  released: Date,
  imageUrl: String,
  collectedBy: [{ type: Schema.Types.ObjectId, ref: "Profile" }],
  // To be filled in later
  reviews: [{type: Schema.Types.ObjectId, ref: "comicReview"}],
},{
  timestamps: true,
});

const Comic = mongoose.model("Comic", comicSchema);
