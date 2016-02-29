var resizeController = (function () {
  var logoText = document.querySelector('.navbar > .navbar-logo > p');


// =========================
//    Logo Text Selection
// =========================
  function selectLogoText () {
    var width = window.innerWidth;

    if (width >= 1200) {
      logoText.innerHTML = 'socal <span>virtual reality</span> conference & expo';
    } else if (width >= 992) {
      logoText.innerHTML = 'socal <span>virtual reality</span> conference';
    } else if (width >= 768) {
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
  onresize = resize;
  resize(); 
});