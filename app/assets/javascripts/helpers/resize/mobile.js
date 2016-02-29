var resizeController = (function () {
  var logoText = document.querySelector('.navbar > .navbar-logo > p');


// =========================
//    Logo Text Selection
// =========================
  function selectLogoText () {
    var width = window.screen.width;

    if (width >= 768) {
      logoText.innerHTML = 'socal <span>vr</span> conference';
    } else {
      logoText.innerHTML = 'socal <span>vr</span> con';
    }
  }


// =========================
//     Resize Controller
// =========================
  function resize () {
    selectLogoText();
  }


// =========================
//      Initialization
// =========================
  window.onresize = resize;
  resize();
  
});