const express = require("express");
const router = express.Router();

//question controllers
const { askquestion , allquestions ,singlequestion }=require('../controller/questionControl')

//question router

router.post("/askquestion",askquestion)

router.get("/allquestions",allquestions );

router.get("/singlequestion",singlequestion );




module.exports = router;
