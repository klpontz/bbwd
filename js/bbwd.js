$(document).ready(function() {
  $.getJSON('/js/bbwd.json', function(data) {
    $.each(data, function(clientId,data) {
      $.each(data, function(key,val) {
        if (key == "title") {
          $('h1.' + clientId).html(val);
        }
        if (key == "url") {
          $('a.' + clientId).attr("href" , val);
		  $('a.' + clientId).attr("target" , "_blank");
	    }
        if (key == "linkText") {
          $('a.' + clientId).html(val);
        }
        if (key == "description") {
          $('p.' + clientId).html(val);
        }
      });
    });
  });
});
