/**
 * conetion to database
 */
import mongoose from "mongoose"
import dotenv from 'dotenv'

dotenv.config()
mongoose.connect(process.env.URL_CONNECT)
.then(()=>console.log("mongoDB Conectado"))
.catch(error=>{
  console.log(error)
})

export default mongoose;