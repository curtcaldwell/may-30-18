$(document).ready(function(){
  $("button#bark").click(function(){
    $("ul#dog").prepend("<li>Woof</li>");
    $("ul#cat").prepend("<li>Hiss!</li>");
    $("ul#cat").children("li").first().click(function(){
      $(this).text("This animal has been obliterated");
      $(this).css("color", "red").delay(2000).slideToggle();
      // $(this).delay(2000).remove();
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
