  Template.heroesList.heroes = function () {
    return Heroes.find({}, {sort: {score: -1, hero: 1}});
  };