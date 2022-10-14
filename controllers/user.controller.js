const User = require("../models/user");
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const config = require("../config.json");



exports.singup = async (req,res) => {

const{ fullName,email,password,picture,gender}  = req.body;
const verifUser = await User.findOne({email});
if(verifUser){
    console.log("user already exist")
    res.status(403).send({ message: "User already exist"});
    }
    else {
        console.log("t3ada")
        const newUser = new User();
        mdpEncrypted = await bcrypt.hash(password,10);
        newUser.fullName= fullName;
        newUser.email=email
        newUser.password= mdpEncrypted;
        newUser.gender=gender;

        newUser.save();
        //token creation 
        const token = jwt.sign({ _id: newUser._id}, config.token_secret, {
            expiresIn: "60000", // in Milliseconds (3600000 = 1 hour)
        });
        res.status(200).send({message: "success",user:newUser,"token":token});

    };

};
function makeTokenForLogin(_id) {
    return jwt.sign({ _id: _id }, config.token_secret, {
        expiresIn: "99999999999", // in Milliseconds (3600000 = 1 hour)
    });
}
exports.login = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
       console.log(user)
    if (user && await( bcrypt.compare(password, user.password))) {

        // token creation
        const token = makeTokenForLogin(user._id )
        user.token=token
        console.log("tokenn:",user.token)

        
            res.status(200).send(user);
    

    } else {
        res.status(403).send({ message: "email or password incorrect" });
    };

};
exports.forgotPassword = async (req, res) => {
    const resetCode = req.body.resetCode
    console.log(req.body.resetCode)
    const user = await User.findOne({ "email": req.body.email });

    if (user) {
        // token creation
        const token = jwt.sign({ _id: user._id, email: user.email }, config.token_secret, {
            expiresIn: "3600000", // in Milliseconds (3600000 = 1 hour)
        });

        sendPasswordResetEmail(user.email, token, resetCode);


        res.status(200).send({ "message": "Reset email has been sent to " + user.email })
    } else {
        res.status(404).send({ "message": "User not found" })
    }
};
async function sendPasswordResetEmail(email, token, resetCode) {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'yesmine.khayati0@gmail.com',
            pass: 'y09877635'
        }
    });

    transporter.verify(function (error, success) {
        if (error) {
            console.log(error);
            console.log("Server not ready");
        } else {
            console.log("Server is ready to take our messages");
        }
    });

    const mailOptions = {
        from: 'yesmine.khayati0@gmail.com',
        to: email,
        subject: 'Reset your password',
        html: "<h2>Use this as your reset code : " + "000000" + "</h2>"
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
};
exports.editPassword = async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body)

    mdpEncrypted = await bcrypt.hash(password, 10);
    let user = await User.findOneAndUpdate(
        { email: email },
        {
            $set: {
                password: mdpEncrypted
            }
        }
    );

    res.send({ user });
};