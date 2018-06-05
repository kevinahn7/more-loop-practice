$(document).ready(function() {
  $(".puzzle").submit(function(event) {
    event.preventDefault();
    $(".puzzle").hide();
    $(".fail").show();
    var quote = $(".quote").val();
    var array = quote.split("");
    for (var x=0; x < array.length; x++) {
      if (array[x].toLowerCase() === "a" || quote[x] === "e" || quote[x] === "i" || quote[x] === "o" || quote[x] === "u") {
        array[x] = "-";
        $(".answer").text(array.join(""));
      }
    };
  })
  $(".fail").click(function() {
    $(".puzzle").show();
    $(".fail").hide();
  })

});
