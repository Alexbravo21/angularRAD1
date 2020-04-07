//Install express server
const express = require('express');
const path = require('path');

const app = express();
var passport = require('passport');
var passportSetup = require('./config')

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/ejericio-A06032020'));

//Routes for current sections
app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname+'/dist/ejericio-A06032020/index.html'));
});
app.get('/quoting', function(req,res) {
    res.sendFile(path.join(__dirname+'/dist/ejericio-A06032020/index.html'));
});
app.get('/armory', function(req,res) {
    res.sendFile(path.join(__dirname+'/dist/ejericio-A06032020/index.html'));
});

//Bnet routes

app.get('/auth/bnet',
    passport.authenticate('bnet'));

app.get('/armory/auth/bnet/callback',
    passport.authenticate('bnet', { failureRedirect: '/' }),
    function(req, res){
        res.redirect('/armory/character');
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 3000);