const User = require("../models/User");

const getById = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw new Error("error:" + error.message);
  }
};

module.export = {
  getAllUsers,
};
