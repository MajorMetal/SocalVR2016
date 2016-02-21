var resizeController = (function () {
  var banner = document.querySelector('.banner > img'),
      logoText = document.querySelector('.navbar-logo > p');


// =========================
//    Logo Text Selection
// =========================
  function selectLogoText () {
    var width = window.innerWidth;

    if (width >= 768) {
      logoText.innerHTML = 'socal <span>vr</span> conference';
    } else {
      logoText.innerHTML = 'socal <span>vr</span> con';
    }
  }

  function updateBanner () {
    var height = window.screen.height,
        width = window.screen.width,
        aspect = 3556 / 2238;

    if ((width / height) < aspect) {
      banner.style.height = height + 'px';
      banner.style.marginTop = '';
      banner.style.width = '';
      banner.style.marginLeft = ((width - (aspect * height)) / 2) + 'px';
    } else {
      banner.style.height = '';
      banner.style.marginTop = ((height - (width / aspect)) / 2) + 'px';
      banner.style.width = width + 'px';
      banner.style.marginLeft = '';
    }
  }

  function resize () {
    selectLogoText();

    if (banner) {
      updateBanner();
    }
  }

  window.onresize = resize;
  resize();
  
});