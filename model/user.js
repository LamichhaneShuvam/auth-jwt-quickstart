const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    email: { type: String, unique: true },
    password: String,
    token: String,
},
{
    versionKey: false
}
);

const User = mongoose.model("User", schema);
module.exports = User;
