var express = require('express');
var router = express.Router();
var users = require('../server/controllers/users');

User = require('../server/models/').User;
var passport = require('../passport_config');

// router.get('/users', users.index);
// router.get('/users/:id', users.show);
// // router.get('/users/email/:email', users.showbyEmail);
// router.post('/users', users.create);
// router.put('/users/:id', users.update);
// router.delete('/users', users.delete);

// module.exports = router;
//
// app.use(passport.initialize());
// app.use(passport.session());

router.get('/',
    function(req, res) {
        res.render('home', { user: req.user });
    });

router.get('/login',
    function(req, res){
        res.render('login');
    });

router.post('/login',
    passport.authenticate('local', { failureRedirect: '/login' }),
    function(req, res) {
        console.log("post login @@@@@@");
        res.redirect('/');
    });

router.get('/logout',
    function(req, res){
        req.logout();
        res.redirect('/');
    });

router.get('/profile',
    require('connect-ensure-login').ensureLoggedIn(),
    function(req, res) {
        res.render('profile', {user: req.user});

    });

module.exports = router;
