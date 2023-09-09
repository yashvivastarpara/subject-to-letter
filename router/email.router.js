const Router = require("express");
const gethome = require("../controller/email.controller");
let router =Router();

router.get("/",gethome)

module.exports= router;