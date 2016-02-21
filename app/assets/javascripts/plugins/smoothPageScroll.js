$(function() {
  $("a[href*='#']:not([href='#'])").click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname){
      var hash = this.hash,
          target = $(hash),
          position = target.offset().top - 8;

      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      
      if (target.length) {
        $('html,body').animate({
          scrollTop: position
        }, Math.max(500, position - $('body').scrollTop()));

        return false;
      }
    }
  });
});