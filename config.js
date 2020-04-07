var BnetStrategy = require('passport-bnet').Strategy;
var passport = require('passport');
var BNET_ID = process.env.BNET_ID
var BNET_SECRET = process.env.BNET_SECRET

// Use the BnetStrategy within Passport.
passport.use(new BnetStrategy({
    clientID: BNET_ID,
    clientSecret: BNET_SECRET,
    callbackURL: "/armory/auth/bnet/callback",
    region: "us"
}, function(accessToken, refreshToken, profile, done) {
    console.log(profile);
    return done(null, profile);
}));