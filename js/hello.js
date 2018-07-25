var  $  =  require("jquery");
$(function()  {
  alert("it  works!");
});
$(function(){
  $("h1").show.slidetoggle();
  var $li=$("li");
  $.show().each(function(index){
	  $(this).delay(700*index).fadein(700);
	});
})();
