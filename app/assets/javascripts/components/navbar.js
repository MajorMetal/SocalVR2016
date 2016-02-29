var navbarController = (function () {
  var links = document.querySelectorAll('.navbar-menu > ul > li > a'),
      mouseClicked;


// =========================
//   Active Page Selector
// =========================
  function activePageSelector (path) {
    var buttons = {
      '/': links[0],
      '/expo': links[1]
    };

    buttons[path].className = 'active';
  }


// =========================
//     Element Creators
// =========================
  // Ripple 'container' used in focus animation
  function createRippleContainer () {
    var element = document.createElement('div');

    element.className = 'ripple-container';

    return element;
  }

  // Ripple used for focus animatins
  function createFocusRipple (height, width) {
    var element = document.createElement('span'),
        rippleWidth = width * 0.9;

    return buildRipple(element, 'ripple focus', ((height - rippleWidth) / 2) + 'px', '5%', rippleWidth + 'px', rippleWidth + 'px', '#EEEEEE');
  }

  // Ripple used for click animations
  function createClickRipple (yPos, xPos, width) {
    var element = document.createElement('span');

    return buildRipple(element, 'ripple click', (yPos - (width / 2)) + 'px'), (xPos - (width / 2)) + 'px', width + 'px', width + 'px', '#BDBDBD';
  }

  // Assigns style to ripple
  function buildRipple (element, klass, top, left, height, width, backgroundColor) {
    element.className = klass;
    element.style.top = top;
    element.style.left = left;
    element.style.height = height;
    element.style.width = width;
    element.style.backgroundColor = backgroundColor;

    return element;
  }


// =========================
//      Event Handlers
// =========================
  function onFocusHandler () {
    if (!mouseClicked) {
      var container = createRippleContainer(),
          ripple = createFocusRipple(this.clientHeight, this.clientWidth);

      container.appendChild(ripple);
      this.appendChild(container);
    }
  }

  function onBlurHandler () {
    var ripple = this.querySelector('.ripple-container');

    if (ripple) { this.removeChild(ripple) }
  }

  function onMouseDownHandler (event) {
    if (!mouseClicked) {
      var self = this,
          ripple = createClickRipple(event.offsetY, event.offsetX, (this.clientHeight + this.clientWidth));

      mouseClicked = true;
      self.appendChild(ripple);

      setTimeout(function () {
        self.removeChild(ripple);
        mouseClicked = false;
      }, 700);
    }
  }


// =========================
//      Event Listeners
// =========================
  for (var i = 0; i < links.length; i++) {
    addEvent(links[i], 'focus', onFocusHandler);
    addEvent(links[i], 'blur', onBlurHandler);
    addEvent(links[i], 'mousedown', onMouseDownHandler);
  }


// =========================
//      Initialization
// =========================
  activePageSelector(location.pathname);
});
