var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var user_db = require('./server/controllers/users');


passport.use(new Strategy(
    {usernameField: 'email',
        passwordField: 'password' },
    function(username, password, cb) {
        user_db.showbyEmail(username, function(err, user) {
            console.log("inside USERby email $$$$$", username);
            if (err) { return cb(err); }
            if (!user) { return cb(null, false); }
            if (user.password != password) { return cb(null, false); }
            return cb(null, user);
        });
    }));




passport.serializeUser(function(user, cb) {
    cb(null, user.email);
});

passport.deserializeUser(function(email, cb) {
    user_db.showbyEmail(email, function (err, user) {
        if (err) { return cb(err); }
        cb(null, user);
    });
});


module.exports = passport;