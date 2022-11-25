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
    const newProduct = new productModel({
      name,
      category,
      price,
      imageUrl,
    });
    const saveProduct = await newProduct.save();
    console.log(saveProduct);
    res.status(201).json(saveProduct);
  } catch (error) {
    res.send("error");
    console.log("error");
  }
};
export const getOneProductById = async (req, res) => {
  try {
    const productDB = await productModel.findById({
      _id: req.params.productId,
    });
    res.status(200).json(productDB);
  } catch (error) {
    console.log(error);
  }
};
export const updateProductById = async (req, res) => {
  try {
    const updateProduct = await productModel.findByIdAndUpdate(
      req.params.idUpadate,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(updateProduct);
  } catch (error) {
    console.log(error);
  }
};
export const deleteProductById = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.params.idDelete);
    res.status(200).json();
  } catch (error) {
    console.log(error);
  }
};
