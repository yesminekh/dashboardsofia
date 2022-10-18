var express = require('express');
var router = express.Router();
const donnee= require("../models/donne");
const DonneController = require("../controllers/donne.controller");
const donne = require('../models/donne');

/* GET users listing. */
router.route("/")

   .get(DonneController.GetAllDonnes)
   .post(DonneController.addDonne)
   .delete(DonneController.deleteDonne)
    //.delete(DonneController.deleteallDonne);
  // router.get("/ts",DonneController.getDonne)
   router.get("/:ts",async(req,res)=>{
      let donnes= await donnee.findOne({"ts": req.body.ts })
      
      if (donnes) {
          res.status(200).send({donnes,message:"success"})
      } else {
          res.status(403).send({ message: "fail" });
      }
  }
  )
  router.get("/last",async(req,res)=>{
   let donne=   donnee.find.sort([['_id', 1]] )
   console.log("latest donne :",donne)
   if (donne) {
      res.status(200).send({donne:donne,message:"success"})
  } else {
      res.status(403).send({ message: "fail" });
  }
   
  })
  

module.exports = router;
