$( document ).ready(function() {
  $( ".js-menu" ).click(function(e) {
    e.preventDefault();
    $( ".js-mobile-navbar" ).addClass( "open" );
  });

  $( ".js-close-button" ).click(function(e) {
    e.preventDefault();
    $( ".js-mobile-navbar" ).removeClass( "open" );
  });
});
