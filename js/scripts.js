$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var nameInput = $("input#name").val();
    var addressInput = $("input#address").val();
    var titleInput= $("input#title").val();
    var textInput = $("input#text").val();

    $(".name").text(nameInput);
    $(".address").text(addressInput);
    $(".title").text(titleInput);
    $(".text").text(textInput);

    // $("#letter").show();ß

    event.preventDefault();
  });
});
