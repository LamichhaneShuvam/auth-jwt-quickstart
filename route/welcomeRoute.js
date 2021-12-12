const router = require('express').Router();
const auth = require('../helper/auth');


router.get('/', auth, ( req, res ) => {
    res.send('welcome user -> '+ req.user.email);
});

module.exports = router;
