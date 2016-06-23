const express = require('express');
const {json} = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const passport= require('passport');


const sessionConfig = require('./server/config/sessionConfig');
const masterRoutes = require('./server/masterRoutes');

const app = express();
const port = 8080;

app.use(express.static(`${__dirname}/app`));
app.use ( session (sessionConfig) );

const mongoUri = "mongodb://localhost/ecommerce";
mongoose.connect(mongoUri);
mongoose.connection.once('open', ()=> {console.log(`Connected with mongo db at ${mongoUri}`)})


app.use( json() );
//Everything goes below app.use

app.use((req, res, next) => {
    console.log("body:",req.body);
    console.log("query:",req.query);
    next();
});
masterRoutes(app);




app.listen(port, ()=> {
console.log(`Express is running on ${port}`);
});
