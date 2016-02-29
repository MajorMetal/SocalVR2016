// This is a manifest file that'll be compiled into desktop.js, which will include all the files
// listed below.
//
//= require jquery
//= require jquery_ujs
//= require helpers/main
//= require helpers/resize/desktop
//= require components/navbar
//= require components/footer

document.addEventListener('DOMContentLoaded', function () {
  resizeController();
	navbarController();
	footerController();
});
