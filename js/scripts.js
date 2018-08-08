$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var nameInput = $("input#name").val();
    var addressInput = $("input#address").val();
    var titleInput= $("input#title").val();
    var textInput = $("input#text").val();

    $(".title").append(nameInput);
    $(".name").append(addressInput);
    $(".address").append(titleInput);
    $(".text").append(textInput);

    // $("#letter").show();

    event.preventDefault();
  });
});
