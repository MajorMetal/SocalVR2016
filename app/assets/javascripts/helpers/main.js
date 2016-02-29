// =========================
//      Event Listeners
// =========================
// Adds an event to the DOM
function addEvent (element, type, eventHandler) {
  if (element.addEventListener) { // For all major browsers, except IE 8 and earlier
    element.addEventListener(type, eventHandler);
  } else { // For IE 8 and earlier versions
    element.attachEvent('on' + type, eventHandler);
  }
}

// Removes an event from the DOM
function removeEvent (element, type, eventHandler) {
  if (element.removeEventListener) { // For all major browsers, except IE 8 and earlier
    element.removeEventListener(type, eventHandler);
  } else { // For IE 8 and earlier versions
    element.detachEvent('on' + type, eventHandler);
  }
}
