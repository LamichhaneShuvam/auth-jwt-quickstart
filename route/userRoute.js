const router = require('express').Router();
const { userLogin, registerUser } = require('../controller/userController');


router.post('/register', registerUser);

router.post('/login', userLogin);


module.exports = router;
