var footerController = (function () {
  var links = document.querySelectorAll('.footer > ul > li > a'),
      mouseClicked;


// =========================
//     Element Creators
// =========================
  function createRipple (xPos, yPos) {
    var element = document.createElement('span');

    element.className = 'ripple';
    element.style.top = yPos + 'px';
    element.style.left = xPos + 'px';

    return element;
  }


// =========================
//      Event Handlers
// =========================
  function onMouseDownHandler (event) {
    // If there is not a current click animation going
    if (!mouseClicked) {
      var self = this,
          ripple = createRipple(event.offsetX, event.offsetY);

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
