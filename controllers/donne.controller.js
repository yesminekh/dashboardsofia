const donnee= require("../models/donne");
module.exports={

getDonne : async(req,res)=>{
    let donnes= await donnee.findOne({"ts": req.body.ts })
    
    if (donnes) {
        res.status(200).send({donnes,message:"success"})
    } else {
        res.status(403).send({ message: "fail" });
    }
},
GetAllDonnes : async (req, res) => {
    const Donnes = await donnee.find({});

    if (Donnes) {
        res.status(200).send({ Donnes, message: "success" });
    } else {
        res.status(403).send({ message: "fail" });
    }
},
addDonne : async ( req,res)=>{
    const{Temperature,Pression,humidite,ts,status} = req.body;
    console.log("req.body",req.body);
    const donne = new donnee();
    donne.Temperature= Temperature;
    donne.Pression=Pression;
    donne.humidite=humidite;
    donne.status=status;
    donne.ts=ts;
     donne.save()
    res.status(200).json(donne)


},

deleteDonne : async(req,res)=>{
    const donne = await donnee.findById(req.body._id).remove()

    res.status(200).send({ message: "success", Donne: donne });

},
deleteallDonne :  async(req,res)=>{
    donnee.remove({}, function (err, donneroute) {
        if (err) { return handleError(res, err); }
        return res.status(204).send({ donne: "No data" });
    })
} }