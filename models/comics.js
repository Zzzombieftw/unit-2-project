import mongoose from 'mongoose'
const Schema = mongoose.Schema;

export {
	Comic
}

const comicSchema = new Schema({
  name: {type:String, required: true},
  author: {type:String, required: true},
  price:{type:Number},
  released: Date,
  
},{
  timestamps: true,
});

const Comic = mongoose.model("Comic", comicSchema);
