$(document).ready(function() {
  $(".puzzle").submit(function(event) {
    event.preventDefault();
    $(".puzzle").hide();
    $(".attempt").show();
    $(".try").show();
    var quote = $(".quote").val();
    var array = quote.split("");
    for (var x=0; x < array.length; x++) {
      if (array[x].toLowerCase() === "a" || quote[x] === "e" || quote[x] === "i" || quote[x] === "o" || quote[x] === "u") {
        array[x] = "-";
        $(".answer").text(array.join(""));
      }
    };


    $(".attempt").submit(function(event) {
      event.preventDefault();
      $(".puzzle").show();
      $(".hide").hide();
      $(".disable").attr("disabled", "disabled");
      var inputtedText = $(".inputtedText").val();
      if (inputtedText.toLowerCase() === quote.toLowerCase()) {
        $(".result").text("You got it good job!");
      } else {
        $(".result").text("Sorry, but you are not worthy");
      }
    });
  })

});
