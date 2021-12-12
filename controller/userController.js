const { userLoginService, userRegisterService } = require('../service/userService');

const registerUser = async (req, res) => {
    try{
        const { name, email, password } = req.body;
        if(!( name && email && password )) return res.status(400).send('Missing name or email or password');
        res.status(200).json(await userRegisterService(name, email, password));

    } catch ( error ) {
        res.status(400).send(error);
    }  
};

const userLogin = async (req, res) => {
    try {

        const { email, password, keepAlive } = req.body;
        if(!( email, password )) return res.status(400).send('missing email or password')
        res.status(200).json(await userLoginService(email, password, keepAlive));
    
    } catch (error) {
        res.status(400).send(error);
    }
};

module.exports = {
    registerUser,
    userLogin
}
