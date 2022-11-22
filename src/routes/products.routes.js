/**
 * Products Routes
 */
import { Router } from "express";
//!control import
import * as productsCtrl from "../controllers/products.controller";
const routerProducts = Router();
//!creating routes
routerProducts.get("/", productsCtrl.getAllProducts);
routerProducts.get("/:productId", productsCtrl.getOneProductById);
routerProducts.post("/", productsCtrl.createProduct);
routerProducts.put('/:idUpadate',productsCtrl.updateProductById);

export default routerProducts;
