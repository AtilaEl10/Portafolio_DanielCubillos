$(function(){
    $("a").click(function(event) {
        if (this.hash !=="") {
            event.preventDefault();
            var gato = this.hash;
            $('html, body').animate({
                scrollTop: $(gato).offset().top
            }, 800, function(){
                window.location.hash = gato;
            });
        }
    });
    //Popover
    $('[data-toggle="popover"]').popover();
      //tooltip
  $('[data-toggle="tooltip"]').tooltip();

  $('a').attr('target', '_blank');

});