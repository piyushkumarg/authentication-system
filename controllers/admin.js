const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const jwtSecretKey = process.env.JWT_SECRET_KEY;

const handleAdminRegister = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = new User({
      username,
      email,
      password: hashedPassword,
      userType: "Admin",
    });

    await admin.save();
    res.status(201).json({ message: "Admin registered successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const handleAdminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await User.findOne({ email, userType: "Admin" });

    if (admin && (await bcrypt.compare(password, admin.password))) {
      const token = jwt.sign({ email, userType: "Admin" }, jwtSecretKey, {
        expiresIn: "1h",
      });
      res.json({ token });
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const handleAdminAdduser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const normalUser = new User({
      username,
      email,
      password: hashedPassword,
      userType: "Normal User",
    });

    await normalUser.save();
    res.status(201).json({ message: "Normal User added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const handleListAllNormalUser = async (req, res) => {
  try {
    const admin = req.user;

    const normalUsers = await User.find({
      userType: "Normal User",
    });

    res.json(normalUsers);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  handleAdminRegister,
  handleAdminLogin,
  handleAdminAdduser,
  handleListAllNormalUser,
};
