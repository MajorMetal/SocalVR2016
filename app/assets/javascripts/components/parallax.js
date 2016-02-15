var parallax = (function () {
  document.addEventListener('scroll', function () {
  	var elements = document.querySelectorAll('[data-scroll-speed]'),
        scrollTop = this.body.scrollTop;

    for (var i = 0; i < elements.length; i++) {
      var self = elements[i],
          scrollSpeed = parseInt(self.getAttribute('data-scroll-speed')),
          value = scrollTop / scrollSpeed;

      self.style.transform = 'translateY(' + value + 'px)';
    }
  });
});