// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
//= require jquery
//= require jquery_ujs
//= require components/navbar/mobile
//= require components/footer
//= require components/resize/mobile

document.addEventListener('DOMContentLoaded', function () {
	navbarController();
	footerController();
  resizeController();
});
