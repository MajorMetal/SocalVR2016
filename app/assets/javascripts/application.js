// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
//= require jquery
//= require jquery_ujs
//= require components/navbar
//= require components/footer
//= require components/resize/desktop
//= require components/parallax

document.addEventListener('DOMContentLoaded', function () {
	navbarController();
	footerController();
  resizeController();
  parallax();
});
