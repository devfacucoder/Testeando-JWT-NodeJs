import userModel from "../models/user.model";
import roleModel from "../models/roles.model";
import jwt from "jsonwebtoken";
import config from "../config";
export const singUp = async (req, res) => {
  try {
    const { username, email, password, roles } = req.body;
    const newUserDB = new userModel({
      username,
      email,
      password: await userModel.enCryptPassword(password),
    });
    
    if(roles){

      for(let i = 0; i<=roles.length;i++){
        if( (roles[i]==="admin") || (roles[i]==="moderator") ){
          return res.status(400).json({ mesagge: "error not access" });
        }
      }
      const role = await roleModel.findOne({ name: "user" });
      newUserDB.roles = [role._id];
      
    }
    const newUserDBSave = await newUserDB.save();
    const token = jwt.sign({ id: newUserDBSave._id }, config.SECRET, {
      expiresIn: 86400, // 24 hours
    });

    res.status(200).json(token);
  } catch (error) {
    console.log(error);
  }
};
export const singIn = async (req, res) => {
  try {
    const userFound = await userModel
      .findOne({ email: req.body.email })
      .populate("roles");
    if (!userFound) {
      return res.status(400).json({ message: "user or password incorrect" });
    }
    const machtPassword = await userModel.comparePassword(
      req.body.password,
      userFound.password
    );
    if (!machtPassword) {
      return res.status(400).json({ message: "user or password incorrect" });
    }

    const token = jwt.sign({ id: userFound._id }, config.SECRET, {
      expiresIn: 86400, //24 hours
    });

    res.status(200).json(token);
  } catch (error) {
    console.log(error);
  }
};
