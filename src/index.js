import express from 'express';
const port = 7040
const app = express();

app.listen(port,()=>{
  console.log(`server on port:${port} http://localhost:${port} `)
})
