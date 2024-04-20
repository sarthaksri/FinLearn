const express = require('express')
const cors = require('cors');
const connectToMongo = require('./config/database');
const app = express();
const cookiep = require("cookie-parser");
const port = process.env.PORT || 5000;
require("dotenv").config();
app.use(cors());

connectToMongo();

app.get("/",(req,res)=>{
    return res.json({
        success:true,
        message:"YOUR SERVER IS ACTIVATED"
    })
  })

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  })