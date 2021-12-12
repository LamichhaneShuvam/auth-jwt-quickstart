const { verifiedAndDecodedToken } = require('../service/tokenService')

const auth = ( req, res, next ) => {
    const bearerHeader = req.headers["authorization"];
    try {
        if(!bearerHeader) return res.status(400).send('Login to continue.')
        req.user = verifiedAndDecodedToken(bearerHeader);
    } catch (error) {
        return res.status(400).send("Token invalid or expired.")
    }
    return next();
}

module.exports = auth;
