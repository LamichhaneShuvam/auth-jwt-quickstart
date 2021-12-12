const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const port = 3000 || process.env.PORT;

const userRoute = require('./route/userRoute')
const welcomeRoute = require('./route/welcomeRoute')
app.use(express.json());

app.use('/user', userRoute);
app.use('/welcome', welcomeRoute);

app.listen(port ,() => {
    console.log(`server started on port ${port}...`);
    mongoose.connect(process.env.MONGO_URL, err => err ? console.log(err) : console.log('connected to the database.'));
});
