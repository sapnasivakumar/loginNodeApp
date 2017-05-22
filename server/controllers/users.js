User = require('../models/').User;

module.exports =  {
    //Get a list of all users using model.findAll()
    index:  function(req, res) {
        console.log("inside the users###");
        User.findAll()
            .then(function (users) {
                res.status(200).json(users);
            })
            .catch(function (error) {
                console.log("error in index$$$$", error);
                res.status(500).json(error);
            });
    },

    //Get an users by the unique ID using model.findById()
    show:  function(req, res) {
        User.findById(req.params.id)
            .then(function (user){
                res.status(200).json(user);
            })
            .catch(function (error){
                res.status(500).json(error);
            });
    },

    showbyEmail: function(email, callback) {
        console.log("inside showbyEmail #####",email);
        User.findOne({
            where: {
                email: email
            }
        })
            .then(function (user){
                callback(null, user);
            })
            .catch(function (error){
                callback(error);
            });
    },

//Create a new users using model.create()
    create:  function(req, res) {
        User.create(req.body)
            .then(function (newUser) {
                res.status(200).json(newUser);
            })
            .catch(function (error){
                res.status(500).json(error);
            });
    },

    //Edit an existing users details using model.update()
    update:  function(req, res) {
        User.update(req.body, {
            where: {
                id: req.params.id
            }
        })
            .then(function (updatedRecords) {
                res.status(200).json(updatedRecords);
            })
            .catch(function (error){
                res.status(500).json(error);
            });
    },

    //Delete an existing users by the unique ID using model.destroy()
    delete:  function(req, res) {
        User.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(function (deletedRecords) {
                res.status(200).json(deletedRecords);
            })
            .catch(function (error){
                res.status(500).json(error);
            });
    }

};