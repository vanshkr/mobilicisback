import mongoose from "mongoose";
import { Schema } from "mongoose";

const sampleSchema = new Schema({
  id: Number,
  first_name: String,
  last_name: String,
  email: String,
  gender: String,
  income: String,
  city: String,
  car: String,
  quote: String,
  phone_price: Number,
});
const sampleModel = mongoose.model("sampleModel", sampleSchema);
export default sampleModel;
