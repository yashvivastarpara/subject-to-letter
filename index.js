const express = require("express")
const cors = require("cors")
const app = express();

app.use(cors());

app.listen(8090,()=>{
    console.log("listining 8090");
})