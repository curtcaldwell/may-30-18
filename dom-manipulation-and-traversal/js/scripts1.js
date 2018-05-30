$(document).ready(function(){
  $("button#bark").click(function(){
    $("ul#dog").prepend("<li>Woof</li>");
    $("ul#cat").prepend("<li>Hiss!</li>");
    $("ul#cat").children("li").first().click(function(){
      $(this).parent().before("<p id=\"death\">This animal has been obliterated</p>");
      $('#death').first().remove().delay(200);
      $(this).remove();
    });
    $("ul#dog").children("li").first().click(function(){
      $(this).parent().before("<p>This animal has been obliterated</p>");
      $(this).remove();
    });
  });
  $("button#meow").click(function(){
    $("ul#cat").prepend("<li>Meow</li>");
    $("ul#dog").prepend("<li>Grrrrr</li>");
    $("ul#cat").children("li").first().click(function(){
      $(this).parent().before("<p>This animal has been obliterated</p>");
      $(this).remove();
    });
    $("ul#dog").children("li").first().click(function(){
      $(this).parent().before("<p>This animal has been obliterated</p>");
      $(this).remove();
    });
  });
});
