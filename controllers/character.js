const db= require("../models");

module.exports={
    findAll: function(req, res) {
        db.Character
          .find({})
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      getCharacterWithEquipmet: function(characterName){
        return Character.findOne({ characterName: characterName })
        .populate('equipment').exec((err, equipment) => {
        console.log("Populated Character " + equipment);
        })
      },
      getCharacterWithFood: function(characterName){
        return Character.findOne({ characterName: characterName })
        .populate('food').exec((err, food) => {
        console.log("Populated Character " + food);
        })
      },
      getCharacterWithPotions: function(characterName){
        return Character.findOne({ characterName: characterName })
        .populate('potions').exec((err, potions) => {
        console.log("Populated Character " + potions);
        })
      },
      findById: function(req, res) {
        db.Character
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      create: function(req, res) {
        db.Character
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      update: function(req, res) {
        db.Character
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      remove: function(req, res) {
        db.Character
          .findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }
}