$(document).ready(function() {
  $.getJSON('/js/bbwd.json', function(data) {
    $.each(data, function(site, obj) {
      $.each(obj, function(key,description) {
        $('.' + site).html(description);
      });
    });
  });
});
