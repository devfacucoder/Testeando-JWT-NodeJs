/**
 * Products Routes
 */
import { Router } from "express";
//!control import
import * as productsCtrl from "../controllers/products.controller";
const routerProducts = Router();
//!import verify
import {authJwt} from '../middlewares/index'
//!creating routes
routerProducts.get("/", productsCtrl.getAllProducts);

routerProducts.get("/:productId", productsCtrl.getOneProductById);

routerProducts.post("/", [authJwt.verifyToken, authJwt.itsModerador ]  , productsCtrl.createProduct);

routerProducts.put("/:idUpadate",[authJwt.verifyToken, authJwt.itsModerador ], productsCtrl.updateProductById);

routerProducts.delete("/:idDelete", [authJwt.verifyToken, authJwt.itsModerador ],productsCtrl.deleteProductById);

export default routerProducts;
