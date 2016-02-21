var footerController = (function () {
  var links = document.querySelectorAll('.footer > ul > li > a'),
      mouseClicked;


// =========================
//     Element Creators
// =========================
  function createRipple (xPos, yPos, width) {
    var element = document.createElement('span');

    element.className = 'ripple';
    element.style.top = (yPos - (width / 2)) + 'px';
    element.style.left = (xPos - (width / 2)) + 'px';
    element.style.height = width + 'px';
    element.style.width = width + 'px';

    return element;
  }


// =========================
//      Event Handlers
// =========================
  function onMouseDownHandler (event) {
    if (!mouseClicked) {
      var self = this,
          ripple = createRipple(event.offsetX, event.offsetY, (this.clientHeight + this.clientWidth));

      mouseClicked = true;
      self.appendChild(ripple);

      setTimeout(function () {
        self.removeChild(ripple);
        mouseClicked = false;
      }, 500);
    }
  }


// =========================
//      Event Listeners
// =========================
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('mousedown', onMouseDownHandler);
  }
});
