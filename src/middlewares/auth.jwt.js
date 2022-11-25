import Jwt from "jsonwebtoken";
import config from "../config";
import roleModel from "../models/roles.model";
import userModel from "../models/user.model";
export const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    console.log(token);

    if (!token) return res.status(400).json({ message: "no token provider" });

    const decoded = Jwt.verify(token, config.SECRET);
    req.userId = decoded.id
    const userDB = await userModel.findById(req.userId, { password: 0 });
    if (!userDB) return res.status(400).json({ message: "not found" });
    next();
  } catch (error) {
    console.log(error);
    return res.status(403).json({ message: "error" });

  }
};
export const itsModerador = async (req,res,next) => {
  try {
    const user = await userModel.findById(req.userId);
    const roles = await roleModel.find({ _id: { $in: user.roles } });
    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === "moderator") {
        next();
        return;
      }
    }
    return res.status(403).json({ message: "Require Moderator Role!" });
  } catch (error) {
    return res.status(500).send({ message: error });
  }
}
export const itsAdmin = async (req,res,next) => {
  try {
    const user = await userModel.findById(req.userId);
    const roles = await roleModel.find({ _id: { $in: user.roles } });
    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === "admin") {
        next();
        return;
      }
    }
    return res.status(403).json({ message: "Require admin Role!" });
  } catch (error) {
    return res.status(500).send({ message: error });
  }
}


