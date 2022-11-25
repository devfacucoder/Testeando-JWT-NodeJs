import express from "express";
import morgan from "morgan";//morgan is a module to show the requests by console

import cors from 'cors'//cors is to prevent problems with cross-origin system
//! Import of the routes
import routerProducts from "./routes/products.routes";
import routerAuth from "./routes/auth.routes";
import routerUsers from "./routes/user.routes";

//Here a function is imported that is explained below
import {createRoles} from './libs/initialSetut'

//application is used to create the server and put middlewars
const app = express();

//This function is used to create user roles
createRoles()
//!middlewars 
app.use(cors())//cors is used here as middlewars
app.use(express.json());//This middlewar is to be able to read json
app.use(morgan("dev"));//morgan("dev")it is to show the requests in console

//!Routes
app.use('/api/users',routerUsers)
app.use("/api/products", routerProducts);
app.use("/api/auth", routerAuth);

//!this is exported to "index.js"
export default app;
