$(document).ready(function() {
  $("#favThingsForm").submit(function(event) {
    var blanks = ["thing1", "thing2", "thing3"];

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });

    $("#favList").show();

    event.preventDefault();
  });
});
