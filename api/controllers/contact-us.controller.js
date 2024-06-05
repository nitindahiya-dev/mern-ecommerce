import Contact_us from "../models/contact-us.model.js";
import { errorHandler } from "../utils/error.js";

export const contactUs = async (req, res, next) => {
  const { username, email, message } = req.body;

  if (
    !username ||
    !email ||
    !message ||
    username === "" ||
    email === "" ||
    message === ""
  ) {
    next(errorHandler(400, "All fields are required"));
  }

  const contact_data = await new Contact_us({
    username,
    email,
    message,
  });

  try {
    await contact_data.save();
    res.json({ message: "Message Send" });
  } catch (error) {
    next(error);
  }
};
