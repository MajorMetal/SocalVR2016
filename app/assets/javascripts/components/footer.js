var footerController = (function () {
	var links = document.querySelectorAll('.footer-menu > li > a'),
			mouseClicked;

// =========================
//     Element Creators
// =========================
	// Creates the ripple circle
	function createClickRipple (parent, x, y) {
		var element = document.createElement('span');

		element.className = 'ripple';
		element.style.top = (y - 1) + 'px';
		element.style.left = (x - 1) + 'px';
		element.style.height = '1px';
		element.style.width = '1px';
		element.style.opacity = '0';

		return element;
	}


// =========================
//    Animation Handlers
// =========================
	// Animation for onclick ripple
	function rippleClickAnimation (element, width, height, x, y) {
		// Calculates the animation duration based on button width
		var duration = Math.min(500, 250 * (width / 50));

		// ==~~~== Ripple Animation has two parts ==~~~==
		// Part I - Handles opacity changes and is in two steps
		$(element).animate({
			opacity: 0.26
		}, {
			duration: duration * 0.25,
			queue: false,
			complete: function () {
				$(element).animate({
					opacity: 0
				}, duration * 0.75);
			}
		});

		// Part II - Handles positioning of the ripple
		$(element).animate({
			top: (y - (width + height)) + 'px',
			left: (x - (width + height)) + 'px',
			height: ((width + height) * 2) + 'px',
			width: ((width + height) * 2) + 'px'
		}, {
			duration: duration,
			queue: false,
			complete: function () {
				element.parentNode.removeChild(element);
				this.style.backgroundColor = '';
				mouseClicked = false;
			}
		});
	}


// =========================
//      Event Handlers
// =========================
	// Setup for on click animation
	function onMouseDownHandler (event) {
		// Checks to make sure there isn't a click animation currently active
			// and the screen size is desktop-sized
		if (!mouseClicked) {
			var width = this.offsetWidth,
					height = this.offsetHeight,
					x = event.offsetX,
					y = event.offsetY
					ripple = createClickRipple(this, x, y);

			this.style.backgroundColor = 'transparent';

			mouseClicked = true;
			this.appendChild(ripple);
			rippleClickAnimation(ripple, width, height, x, y);
		}
	}


// =========================
//      Event Listeners
// =========================
	for (var i = 0; i < links.length; i++) {
		links[i].addEventListener('mousedown', onMouseDownHandler);
	}
});
