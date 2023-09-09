const express = require("express")
const cors = require("cors")
const app = express();

app.use(cors());

app.listen(9090,()=>{
    console.log("listining 9090");
})