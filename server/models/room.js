import mongoose from "mongoose";

const roomSchema = mongoose.Schema({
  title : String,
  maxNoGuests: Number,
  size : Number,
  price: Number,
  thumbnail: String,
  images:[String]
})

const roomModel = mongoose.model('rooms',roomSchema);

export default roomModel;