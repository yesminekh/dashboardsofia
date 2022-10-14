const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
        {
                fullName: { type: String },
                email: { type: String },
                password: { type: String },
                gender:{type:String},
        },
        {
                timestamps: { currentTime: () => Date.now() },
        }
);

module.exports = mongoose.model("user", UserSchema);