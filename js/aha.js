jQuery(document).ready(function () {
  var showHint = function() {
    jQuery("#hint").fadeIn(1000);
	setTimeout('jQuery("#hint").fadeOut(6500);', 3000);
  };	  
  jQuery("div#header h1").click(showHint);
});