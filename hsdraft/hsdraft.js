// Collections of all the heroes and all the cards in HearthStone
// Should never change (except with updates etc..)
Heroes = new Meteor.Collection('heroes');
Cards = new Meteor.Collection('cards');

// Collections of user created things.

/*
if (Meteor.isClient) {
  Template.heroesList.heroes = function () {
    return Heroes.find({}, {sort: {score: -1, hero: 1}});
  };
}
*/
if (Meteor.isServer) {
  Meteor.startup(function () {
    if (Heroes.find().count() === 0) {
      var heroes = ["Hunter",
                   "Rogue",
                   "Paladin",
                   "Priest",
                   "Mage",
                   "Warlock",
                   "Druid",
                   "Shaman",
                   "Warrior"];
      for (var i = 0; i < heroes.length; i++)
        Heroes.insert({name: heroes[i], score: Math.floor(Random.fraction()*10)*5});
    }
  });
}
