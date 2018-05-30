$(document).ready(function(){
  $("#form1").submit(function(event){
    var person1Input = $("input#person1").val();
    var person2Input = $("input#person2").val();
    var animalInput= $("input#animal").val();
    var exclamationInput = $("input#exclamation").val();
    var bodypartInput = $("input#bodypart").val();


$(".person1").text(person1Input);
$(".person2").text(person2Input);
$(".animal").text(animalInput);
$(".exclamation").text(exclamationInput);
$(".bodypart").text(bodypartInput);

$("#story").show();

event.preventDefault();
  });
});
