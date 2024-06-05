import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  message: {
    type: String,
    require: true,
  },
});

const Contact_us = mongoose.model("contact-us", contactSchema);

export default Contact_us;
