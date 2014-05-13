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
        Heroes.insert({name: heroes[i], score: Math.floor(Random.fraction()*10)*5, image: "/images/Heroes/" + heroes[i] + ".png"});
    }
  });
