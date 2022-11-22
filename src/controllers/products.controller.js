/**
 * product route controllers
 */
//!models import
import productModel from "../models/products.model";

export const getAllProducts = async (req, res) => {
  try {
    const productDB = await productModel.find();
    res.json(productDB);
  } catch (error) {
    console.log(error);
    res.send("error");
  }
};
export const createProduct = async (req, res) => {
  try {
    const { name, category, price, imageUrl } = req.body;
    const newProduct =  new productModel({
      name,
      category,
      price,
      imageUrl,
    });
    const saveProduct = await newProduct.save();
    console.log(saveProduct)
    res.status(201).json(saveProduct);
  } catch (error) {
    res.send("error");
    console.log("error");
  }
};
export const getOneProductById = (req, res) => {};
export const updateProductById = (req, res) => {};
export const deleteProductById = (req, res) => {};
