/* REPLACE WITH ANGULAR ROUTING BC JQUERY SUCKS LOL */

var defaultUrl = "/";
console.log(window.location.pathname);
$(document).ready(function() {

  loadDisplay(window.location.pathname);

  $(".redirect-link").click(function(e) {
    e.preventDefault();
    var url = $(this).attr('href');
    loadDisplay(url);
    history.pushState({url: url}, "", url);
  });

  window.onpopstate = function(e) {
    var url = e.state ? e.state.url : defaultUrl;
    loadDisplay(url);
  }
});

function loadDisplay(url) {
  if (url == "/") {
    url = "home";
  }
  var route = "view/" + url + ".html";
  $.ajax({
    url: route,
    success: function(response) {
      $("#display-section").html(response);
    },
    error: function() {
      $("#display-section").html("<p>404!?!?!?</p>")
    }
  });
}
