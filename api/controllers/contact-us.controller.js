import Contact_us from "../models/contact-us.model.js";
import { errorHandler } from "../utils/error.js";

export default contactUs = async (req, res, next) => {
  const { username, email, textarea } = req.body;

  if (
    !username ||
    !email ||
    !textarea ||
    username === "" ||
    email === "" ||
    textarea === ""
  ) {
    next(errorHandler(400, "All fields are required"));
  }

  const contact_data = await new Contact_us({
    username,
    email,
    textarea,
  });

  try {
    await contact_data.save();
    res.json({ message: "Message Send" });
  } catch (error) {
    next(error);
  }
};
