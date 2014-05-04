Questions = new Meteor.Collection('Questions');

if (Meteor.isClient) {
  Template.question.allQuestions = function() {
    return Questions.find();
  };  

  Template.questions.events({
    "click #questionAsk": function(evt, templ) {
      var question = templ.find("#questionText").value;
      Questions.insert({question: question, score: 1});
    }  
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
