var express = require('express');
var router = express.Router();
const DonneController = require("../controllers/donne.controller")

/* GET users listing. */
    
   router.get(DonneController.GetAllDonnes)
   router.post(DonneController.addDonne)
   router.delete(DonneController.deleteDonne)
    //.delete(DonneController.deleteallDonne);
   router.get("/ts",DonneController.getDonne)

module.exports = router;
