//Install express server
const express = require('express');
const path = require('path');

const app = express();
const MONGOU = process.env.MONGOU;
const MONGOP = process.env.MONGOP;
var passport = require('passport');
var passportSetup = require('./config')

var mongoose = require('mongoose');

//Conect to DB
mongoose.connect("mongodb+srv://"+MONGOU+":"+MONGOP+"@cluster0-rntsh.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true }, (err) => {
    if(err){
        console.log(err);
    }else{
        console.log("Conectado a MongoDB");
    }
});

const Characters = require('./server/charachter');

app.get('/armory/characters', function(req, res){
    Characters.find({} ,function(err, wowchars){
        if(err) return res.status(500).json(err);
        var charMap = {};
        wowchars.forEach(function (char) {
            charMap[char._id] = char
        });
        console.log('Found Characters: ', charMap);
        res.status(200).json(charMap);
    })
})


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

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 3000);