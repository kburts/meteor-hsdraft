Template.cardFinder.settings = function() {
  return {
   position: "top",
   limit: 5,
   rules: [
     {
       token: '',
       collection: Cards,
       field: "name",
       template: Template.cardFinderLabel // Make the template
     }/*,
     {
       token: '!',
       collection: Dataset,
       field: "_id",
       options: '',
       matchAll: true,
       filter: { type: "autocomplete" },
       template: Template.dataPiece
     }*/
   ]
  }
};