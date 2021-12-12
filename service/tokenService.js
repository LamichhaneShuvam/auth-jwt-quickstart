const jwt = require('jsonwebtoken');

/**
 * @param {String} id Mongoose uuid.
 * @param {String} email User email.
 * @param {Boolean} keepAlive remember me token length 30 days if true.
 * @returns {String}  
 * Signed token of -> { user_id: id, email: email }
 * 
 */
const generateToken = (id, email, keepAlive) => {
    return jwt.sign( { user_id : id, email }, process.env.SECRET, { expiresIn: keepAlive ? "30d" : "5h" });
};

/**
 * @param {String} bearerToken Token present inside req.headers["Authorization"]
 * @returns {Object} Decoded token object -> {user_id: userId, email: user_email}
 */
const verifiedAndDecodedToken = (bearerHeader) => {
    return jwt.verify(bearerHeader.split(' ')[1], process.env.SECRET);
}

module.exports = { generateToken, verifiedAndDecodedToken };