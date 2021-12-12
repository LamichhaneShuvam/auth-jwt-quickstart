const User = require('../model/user');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const { generateToken } = require('../service/tokenService');

/**
 * @param {String} name Username for registration
 * @param {String} email New user email.
 * @param {String} password New User password.
 * @returns {Object}  
 * user object with token.
 * 
 */
const userRegisterService = async ( name, email, password) => {
    if(await User.findOne({ email })) throw { message: "User already exists." }
    const user = await User.create({
        _id: new mongoose.Types.ObjectId,
        name,
        email: email.toLowerCase(),
        password: await bcrypt.hash( password, 10 ),
    });
    user.token = generateToken(user._id, email);
    return user;
};

/**
 * @param {String} email User email.
 * @param {String} password User encrypted password.
 * @param {Boolean} keepAlive remember me token length 30 days if true.
 * @returns {String}  
 * returns user object with signed token.
 * 
 */
const userLoginService = async (email, password, keepAlive) => {
    const user = await User.findOne({email});
    if(user && (bcrypt.compare(password, user.password))){
        user.token = generateToken(user._id, email,keepAlive);
        return user;
    } else {
        throw {message: "User not found."}
    }
};

module.exports = {
    userRegisterService,
    userLoginService
}
