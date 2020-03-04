const mongoose = require("mongoose");
const db = require("../models");

// This file empties the collection and inserts the things below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/game"
);

const Users = [
  {
    username: "sallySellsSeashells",
    email: "sallyheartsharry@gmail.com",
    password: "sallyandharry5ever",
    firstname: "Sally",
    lastname: "Seashore",
    age: 25,
    phoneNum: 5555555555,
    characters: [
      "5e56b4b076329c4afc0b072f", "5e56b4b076329c4afc0b0730", "5e56b4b076329c4afc0b0733"
    ],
    highscore: 300,
    terms: true,
    notifications: false,
    activeStatus: true,
    blocked: false
  },
  {
    username: "LuisLion",
    email: "rawrluislion@aim.com",
    password: "kaitlynismybeastfriend",
    firstname: "Luis",
    lastname: "Martinez",
    age: 98,
    phoneNum: 5555555555,
    characters: [
      "5e56b4b076329c4afc0b072f", "5e56b4b076329c4afc0b0730", "5e56b4b076329c4afc0b0733"
    ],
    highscore: 3,
    terms: true,
    notifications: false,
    activeStatus: true,
    blocked: false
  },
  {
    username: "zodiaczero",
    email: "scorpioass@yahoo.com",
    password: "iwishiwasanaquairus",
    firstname: "Hairy",
    lastname: "Podder",
    age: 15,
    phoneNum: 5555555555,
    characters: [
      "5e56b4b076329c4afc0b072f", "5e56b4b076329c4afc0b0730", "5e56b4b076329c4afc0b0733"
    ],
    highscore: 600,
    terms: true,
    notifications: false,
    activeStatus: true,
    blocked: false
  },
]

const PresetCharacters = [
  {
    url: "",
    class: "Warrior",
    // attack: 5,
    // defence: 5,
    // health: 20,
    // magic: 0
  },
  {
    url: "",
    class: "Archer",
    // attack: 10,
    // defence: 3,
    // health: 15,
    // magic: 0
  },
  {
    url: "",
    class: "Mage",
    // attack: 1,
    // defence: 5,
    // health: 15,
    // magic: 10
  },
  {
    url: "",
    class: "Tank",
    // attack: 3,
    // defence: 10,
    // health: 25,
    // magic: 0
  },
  {
    url: "",
    class: "Berserker",
    // attack: 15,
    // defence: 1,
    // health: 10,
    // magic: 0
  },
  {
    url: "",
    class: "Cleric",
    // attack: 1,
    // defence: 1,
    // health: 20,
    // magic: 20
  }
];

const PresetEnemies = [
  {
    name: "Lucifer",
    class: "Mage",
    attack: 10,
    defence: 10,
    health: 50,
    magic: 50
  },
  {
    name: "Matilda",
    class: "Archer",
    attack: 10,
    defence: 10,
    health: 30,
    magic: 0
  },
  {
    name: "Alfonso",
    class: "Warrior",
    attack: 5,
    defence: 10,
    health: 30,
    magic: 0
  },
  {
    name: "Frank",
    class: "Tank",
    attack: 5,
    defence: 50,
    health: 50,
    magic: 0
  },
  {
    name: "Olaf",
    class: "Berserker",
    attack: 60,
    defence: 10,
    health: 20,
    magic: 0
  },
  {
    name: "Leona",
    class: "Cleric",
    attack: 1,
    defence: 5,
    health: 30,
    magic: 50
  },
  {
    name: "Wolf pack",
    class: "monster",
    attack: 30,
    defence: 10,
    health: 50,
    magic: 0
  },
  {
    name: "Bandits",
    class: "Warrior",
    attack: 10,
    defence: 10,
    health: 30,
    magic: 0
  },
  {
    name: "Spider",
    class: "Monster",
    attack: 5,
    defence: 5,
    health: 20,
    magic: 5
  },
  {
    name: "Rougue Knight",
    class: "Knight",
    attack: 100,
    defence: 50,
    health: 60,
    magic: 40
  },
  {
    name: "Slime",
    class: "Monster",
    attack: 1,
    defence: 1,
    health: 10,
    magic: 0
  },
  {
    name: "Ent",
    class: "Monster",
    attack: 3,
    defence: 3,
    health: 30,
    magic: 3
  },
  {
    name: "Orcs",
    class: "Monster",
    attack: 15,
    defence: 30,
    health: 50,
    magic: 0
  },
  {
    name: "Trolls",
    class: "Monster",
    attack: 15,
    defence: 15,
    health: 40,
    magic: 0
  },
  {
    name: "Undead",
    class: "Warrior",
    attack: 20,
    defence: 20,
    health: 30,
    magic: 0
  }
];

const PresetEquipment = [
  {
    name: "Fancy Hat",
    Equip: "Head",
    class: ["warrior", "Mage", "Archer", "Berserker", "Cleric", "Tank"],
    attack: 2,
    defence: 2,
    health: 5,
    magic: 2
  },
  {
    name: "Hero's Hood",
    Equip: "Head",
    class: ["warrior", "Mage", "Archer", "Berserker", "Cleric", "Tank"],
    attack: 30,
    defence: 30,
    health: 30,
    magic: 30
  },
  {
    name: "Death Cap",
    Equip: "Body",
    class: ["Mage", "Cleric"],
    attack: -2,
    defence: -5,
    health: -20,
    magic: 30
  },
  {
    name: "Iron Helmet",
    Equip: "Head",
    class: ["warrior", "Berserker", "Tank"],
    attack: 5,
    defence: 5,
    health: 10,
    magic: 0
  },
  {
    name: "Steel Helmet",
    Equip: "Head",
    class: ["warrior", "Berserker", "Tank"],
    attack: 10,
    defence: 10,
    health: 15,
    magic: 0
  },
  {
    name: "Gold Helmet",
    Equip: "Head",
    class: ["warrior","Berserker", "Tank"],
    attack: 15,
    defence: 15,
    health: 20,
    magic: 0
  },
  {
    name: "Diamond Helmet",
    Equip: "Head",
    class: ["warrior","Berserker", "Tank"],
    attack: 25,
    defence: 25,
    health: 30,
    magic: 0
  },
  {
    name: "ChainMail",
    Equip: "Body",
    class: ["warrior", "Archer", "Berserker", "Tank"],
    attack: 5,
    defence: 20,
    health: 20,
    magic: -5
  },
  {
    name: "Mystic Body",
    Equip: "Body",
    class: ["Mage", "Cleric"],
    attack: -2,
    defence: 5,
    health: 20,
    magic: 15
  },
  {
    name: "Leather Pants",
    Equip: "Legs",
    class: "Archer",
    attack: 0,
    defence: 5,
    health: 20,
    magic: 0
  },
  {
    name: "Leather body",
    Equip: "body",
    class: "Archer",
    attack: 0,
    defence: 10,
    health: 20,
    magic: 0
  },
  {
    name: "Leather coif",
    Equip: "head",
    class: "Archer",
    attack: 5,
    defence: 3,
    health: 10,
    magic: 0
  },
  {
    name: "Archer's Pants",
    Equip: "Legs",
    class: "Archer",
    attack: 15,
    defence: 15,
    health: 30,
    magic: 0
  },
  {
    name: "Archer's body",
    Equip: "body",
    class: "Archer",
    attack: 15,
    defence: 15,
    health: 35,
    magic: 0
  },
  {
    name: "Archer's coif",
    Equip: "head",
    class: "Archer",
    attack: 15,
    defence: 15,
    health: 15,
    magic: 0
  },
  {
    name: "Ancient Pants",
    Equip: "Legs",
    class: "Archer",
    attack: 50,
    defence: 25,
    health: 25,
    magic: 0
  },
  {
    name: "Ancient body",
    Equip: "body",
    class: "Archer",
    attack: 50,
    defence: 25,
    health: 25,
    magic: 0
  },
  {
    name: "Ancient coif",
    Equip: "head",
    class: "Archer",
    attack: 50,
    defence: 25,
    health: 25,
    magic: 0
  },
  {
    name: "Staff",
    Equip: "Hand",
    class: ["Mage", "Cleric"],
    attack: 2,
    defence: 2,
    health: 10,
    magic: 20
  },
  {
    name: "Long Stick",
    Equip: "Hand",
    class: ["Mage", "Cleric"],
    attack: 1,
    defence: 1,
    health: 10,
    magic: 10
  },
  {
    name: "Holy Branch",
    Equip: "Hand",
    class: ["Mage", "Cleric"],
    attack: 5,
    defence: 5,
    health: 15,
    magic: 30
  },
  {
    name: "Wand",
    Equip: "Hand",
    class: ["Mage", "Cleric"],
    attack: 5,
    defence: 5,
    health: 15,
    magic: 40
  },
  {
    name: "Death Wand",
    Equip: "Hand",
    class: ["Mage", "Cleric"],
    attack: 5,
    defence: 5,
    health: -20,
    magic: 60
  },
  {
    name: "Holy Book",
    Equip: "Hand",
    class: ["Mage", "Cleric"],
    attack: 2,
    defence: 10,
    health: 20,
    magic: 50
  },
  {
    name: "Apprentice's Notes",
    Equip: "Hand",
    class: ["Mage", "Cleric"],
    attack: 0,
    defence: 0,
    health: 10,
    magic: 10
  },
  {
    name: "God Book",
    Equip: "Hand",
    class: ["Mage", "Cleric"],
    attack: 20,
    defence: 20,
    health: 30,
    magic: 50
  },
  {
    name: "Bow",
    Equip: "Hand",
    class: "Archer",
    attack: 10,
    defence: 0,
    health: 20,
    magic: 0
  },
  {
    name: "Enhanced Bow",
    Equip: "Hand",
    class: "Archer",
    attack: 20,
    defence: 5,
    health: 25,
    magic: 0
  },
  {
    name: "Ultimate Bow",
    Equip: "Hand",
    class: "Archer",
    attack: 60,
    defence: 10,
    health: 30,
    magic: 0
  },
  {
    name: "CrossBow",
    Equip: "Hand",
    class: "Archer",
    attack: 30,
    defence: 10,
    health: 20,
    magic: 0
  },
  {
    name: "Dragon CrossBow",
    Equip: "Hand",
    class: "Archer",
    attack: 45,
    defence: 10,
    health: 30,
    magic: 0
  },
  {
    name: "Blessed Sword",
    Equip: "Hand",
    class: ["warrior", "Tank"],
    attack: 25,
    defence: 25,
    health: 20,
    magic: 25
  },
  {
    name: "Iron Sword",
    Equip: "Hand",
    class: ["warrior", "Tank"],
    attack: 5,
    defence: 5,
    health: 20,
    magic: 5
  },
  {
    name: "Steel Sword",
    Equip: "Hand",
    class: ["warrior", "Tank"],
    attack: 10,
    defence: 10,
    health: 20,
    magic: 0
  },
  {
    name: "Golden Sword",
    Equip: "Hand",
    class: ["warrior", "Tank"],
    attack: 15,
    defence: 15,
    health: 25,
    magic: 0
  },
  {
    name: "Diamond Sword",
    Equip: "Hand",
    class: ["warrior", "Tank"],
    attack: 20,
    defence: 20,
    health: 30,
    magic: 0
  },
  {
    name: "Blood Crafted Sword",
    Equip: "Hand",
    class: ["warrior", "Tank"],
    attack: 15,
    defence: 15,
    health: 20,
    magic: 15
  },
  {
    name: "Axe",
    Equip: "Hand",
    class: "Berserker",
    attack: 20,
    defence: 5,
    health: 10,
    magic: -5
  },
  {
    name: "Large Axe",
    Equip: "Hand",
    class: "Berserker",
    attack: 30,
    defence: 5,
    health: 15,
    magic: -10
  },
  {
    name: "God Slayer Axe",
    Equip: "Hand",
    class: "Berserker",
    attack: 100,
    defence: -5,
    health: -20,
    magic: -15
  },
];

const PresetFood = [
  {
    name: "Bread",
    health: 2
  },
  {
    name: "Fish",
    health: 5
  },
  {
    name: "Cake",
    health: 3
  },
  {
    name: "???",
    health: -5
  },
  {
    name: "?????",
    health: -3
  },
  {
    name: "????",
    health: 10
  },
  {
    name: "Golden Apple",
    health: 50
  },
  {
    name: "Pizza",
    health: 10
  },
  {
    name: "Potato",
    health: 5
  },
  {
    name: "Potato with Cheese",
    health: 10
  },
  {
    name: "Cabbage",
    health: 1
  },
  {
    name: "Chicken",
    health: 15
  },
  {
    name: "King's Meal",
    health: 100
  },
  {
    name: "Water",
    health: 3
  },
  {
    name: "Crackers",
    health: 2
  },
  {
    name: "Mud Pie",
    health: 8
  },
  {
    name: "Rock",
    health: -2
  },
];

const PresetPotion = [
  {
    name: "Attack Potion",
    attack: 10
  },
  {
    name: "Defence Potion",
    defence: 10
  },
  {
    name: "health Potion",
    health: 10
  },
  {
    name: "Magic Potion",
    magic: 10
  },
  {
    name: "Small Mistery potion",
    health: 3,
    attack: 3,
    defence: 3,
    magic: 3
  },
  {
    name: "Large Mistery potion",
    health: -10,
    attack: 15,
    defence: 15,
    magic: 15
  },
  {
    name: "Holy Elixer",
    health: 100,
    attack: 5,
    defence: 5,
    magic: 5
  }
];

const PresetRandom = [
  {
    name: "Traveling Priest",
    action: "heal",
    value: 1
  },
  {
    name: "Random Enemy",
    action: "fight",
    value: 0
  },
  {
    name: "Merchant",
    action: "Sell or Buy",
    value: 1
  },
  {
    name: "Merchant",
    action: "Sell or Buy",
    value: 0
  },
  {
    name: "Commoner",
    action: "Ask for food",
    value: 0
  },
  {
    name: "commoner",
    action: "give item",
    value: 1
  },
  {
    name: "Thief",
    action: "steal",
    value: 0
  }
];

const PresetStory = [
 {
   story_ID: 1,
   text: "You awaken from you mid-morning nap at the sound of nearby screaming. 'Monsters!' the screams shout. 'Monsters are attacking the capital!'",
   options: [
     {
       text: "Grab your wooden sword and shield as an aspiring Knight, even though you are just a squire",
       storyID: 2
     },
     {
      text: "Ready your homemade bow and arrows, and hope that it doesn't break",
      storyID: 2
      },
    {
      text: "Even though you much rather go back to sleep, you know that you need to practice your dagger handling skills more and and slaying a live monster is practical, and profitable",
      storyID: 2
    },
    {
      text: "Grab your staff and spellbook and user a teleport spell to the fight",
      storyID: 2
    },
   ]
 },
 {
  story_ID: 2,
  text: "You arrive at the town square and people are running amok everywhere. Sounds of screams and howls bounce off the wall. You don't recognize some of the bodiies on the ground but you know that deep down more will follow unless you do something",
  options: [
    {
      text: "Readying yourself and your wooden sword, you charge head first into the center of town",
      storyID: 3
    },
    {
     text: "You climb on top of one of the nearby townhouse via some vine and a pit of luck. With the high ground in your favor, you ready your bow for a fight",
     storyID: 3
     },
  ]
},
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(Users))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    // process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Character
  .remove({})
  .then(() => db.Character.collection.insertMany(PresetCharacters))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    // process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Enemies
  .remove({})
  .then(() => db.Enemies.collection.insertMany(PresetEnemies))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    // process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Equipment
  .remove({})
  .then(() => db.Equipment.collection.insertMany(PresetEquipment))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    // process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Food
  .remove({})
  .then(() => db.Food.collection.insertMany(PresetFood))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    // process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Potion
  .remove({})
  .then(() => db.Potion.collection.insertMany(PresetPotion))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    // process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.RandomEvents
  .remove({})
  .then(() => db.RandomEvents.collection.insertMany(PresetRandom))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    // process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Story
  .remove({})
  .then(() => db.Story.collection.insertMany(PresetStory))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    // process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  // db.User
  // .remove({})
  // .then(() => db.collection.insertMany(Users))
  // .then(data => {
  //   console.log(data.result.n + " records inserted!");
  //   // process.exit(0);
  // })
  // .catch(err => {
  //   console.error(err);
  //   process.exit(1);
  // });