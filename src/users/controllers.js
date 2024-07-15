const User = require("./model");

const register = async (req, res) => {
  try {
    const user = await User.create(req.body);

    console.log(user);

    res.status(201).json({ message: "success", user });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

module.exports = {
  register,
};
