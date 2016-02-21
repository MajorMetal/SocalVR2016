var scrollController = (function () {
  var body = document.body,
      banner = document.querySelector('.banner'),
      fab;

  function adjustBannerFab () {
    var height = window.screen.height,
        opacity = 1 - (body.scrollTop / (height * 0.05));

    if (opacity >= 1) {
      fab.style.opacity = '1';
      fab.style.display = '';
    } else if (opacity <= 0) {
      fab.style.opacity = '0';
      fab.style.display = 'none';
    } else {
      fab.style.opacity = opacity;
      fab.style.display = '';
    }
  }

  function whenScrolled () {
    if (fab) {
      adjustBannerFab();
    }
  }

  if (banner) {
    fab = banner.querySelector('.banner > .button-round');
  }

  window.onscroll = whenScrolled;
  whenScrolled();

});
