const mongoose = require("mongoose")
const donneSchema= new mongoose.Schema(
{
    Pression: Number ,
    Temperature: Number  ,
    humidite:  Number ,
    ts: String,
    status:String,

},
{ timestamps: true }
);
module.exports = mongoose.model("donnee", donneSchema);
