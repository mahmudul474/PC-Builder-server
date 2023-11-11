const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
 


app.use(cors());
app.use(express.json()); 



app.get("/", async(req, res, next) => {
  res.send("Hello World");
})
app.get("/api", async(req, res, next) => {
  res.send("Hello World api");
})






