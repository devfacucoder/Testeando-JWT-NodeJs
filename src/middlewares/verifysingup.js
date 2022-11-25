import userModel from "../models/user.model";
import { ROLES } from "../models/roles.model";
export const checkExistingUser = async (req, res, next) => {
  try {
    const userFound = await userModel.findOne({ username: req.body.username });
    if (!userFound) return res.status(400).json({ message: "The user already exists" });

    const email = await userModel.findOne({ email: req.body.email });
    if (!email) return res.status(400).json({ message: "The email already exists" });
    
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const checkExistingRole = (req, res, next) => {
  req.body.roles.find();

  if (!req.body.roles) return res.status(400).json({ message: "No roles" });

  for (let i = 0; i < req.body.roles.length; i++) {
    if (!ROLES.includes(req.body.roles[i])) {
      return res.status(400).json({
        message: `Role ${req.body.roles[i]} does not exist`,
      });
    }
  }

  next();
};