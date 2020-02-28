const db = require("../models");

module.exports = {
    findById: function(req, res) {
        // console.log(req.params.id)
        db.User
        .populate('characters')
        .find({where:{_id:req.params.id}})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    getUserWithCharacters: function(username){
        return User.findOne({ username: username })
        .populate('characters').exec((err, characters) => {
        console.log("Populated User " + characters);
        })
    },
    create: function(req, res){
        db.User.create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
};
