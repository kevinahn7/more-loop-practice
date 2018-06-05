$(document).ready(function() {
  var quote = $(".quote").text();
  var array = quote.split("");
  var replaced = [];

  for (var x=0; x < array.length; x++) {
    if (array[x].toLowerCase() === "a" || quote[x] === "e" || quote[x] === "i" || quote[x] === "o" || quote[x] === "u") {
      array[x] = "-";
      replaced = array;
      $(".quote").text(replaced.join(""));
    }
  };
});
