$(function(){
    
  $("button.btn").on("click", function(e){
      
    e.preventDefault();
    
    $(this).closest("div").find("button.btn").removeClass("-on");
    $(this).addClass("-on");
    
    $("ul.list").removeClass("-on");
    $("ul.list." + $(this).attr("data-target")).addClass("-on");
      
  });
});