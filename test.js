$( function() {
  $( "#element" ).click(function() {
    // $(this).css("background-color", "red");
    var w = "";
    var h = "";
    if ($(this).css("width") != "300px") {
      w = "300px";
      h = "300px";
    }
    else {
      w = "100px";
      h = "100px";
    }
    $(this).animate({
      width: w,
      height: h,
      backgroundColor: "red"
    }, 1000);
  })
} );
