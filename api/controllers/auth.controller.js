import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400, "All fields are required"));
  }

  const hash_password = await bcryptjs.hashSync(password, 10);

  const newUser = await new User({
    username: username,
    email: email,
    password: hash_password,
  });

  try {
    await newUser.save();
    res.json({ message: "Signup Successful" });
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password || email === "" || password === "")
    return next(errorHandler(400, "All fields are required."));

  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(400, "Invalid Credentials");
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(400, "Invalid Credentials");
    const token = jwt.sign({ Id: validUser._id }, process.env.JWT_KEY, {
      expiresIn: "1d",
    });

    const { password: pass, ...rest } = validUser._doc;
    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json(rest);
  } catch (error) {
    next(error);
  }
};

export const google = async (req, res, next) => {
  const { email, name, googlePhotoUrl } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_KEY);
      const { password, ...rest } = user._doc;
      res
        .status(200)
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .json(rest);
    } else {
      const generatedPassword =
        Math.random().toString(32).slice(-8) +
        Math.random().toString(32).slice(-8);
      const hashedpassword = bcryptjs.hashSync(generatedPassword, 10);
      const newUser = new User({
        username:
          name.toLowerCase().split(" ").join("") +
          Math.random().toString(9).slice(-4),
        email,
        password: hashedpassword,
        profilePicture: googlePhotoUrl,
      });
      await newUser.save();
      const token = jwt.sign({id:user._id}, process.env.JWT_KEY);
      const {password , ...rest} = newUser._doc;
      res.status(200).cookie('access_token', token, {httpOnly: true,}).json(rest)
    }
  } catch (error) {
    next(error);
  }
};
