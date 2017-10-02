var suits = ["hearts", "spades", "diamonds", "clubs"];
var cards = ["ace", "1","2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"]

$(document).ready(function() {
  $(".btn").click(function(event) {
    suits.forEach(function(suit) {
      cards.forEach(function(card) {
        $("ol").append("<li>" + card + " of " + suit + ".");
      });
    });
    event.preventDefault();
  });
});
