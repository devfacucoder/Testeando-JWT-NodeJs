/**
 * Products Routes
 */
import { Router } from "express";
//!control import
import * as productsCtrl from '../controllers/products.controller'


const routerProducts = Router();


routerProducts.get('/',productsCtrl.getAllProducts)
routerProducts.post('/',productsCtrl.createProduct);


export default routerProducts

