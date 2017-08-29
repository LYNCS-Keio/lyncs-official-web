function toggleNav() {
  _width = window.innerWidth;
  if (_width < 769) {
    $('.hamburger nav').css({
      'display': 'none',
    });
  } else {
    $('.hamburger nav').css({
      'display': 'block',
    });
  }
};

$(window).ready(function() {
  toggleNav();
});

$(window).resize(function() {
  toggleNav();
});

$(function() {
  $('.hamburger_button').click(function(){
    $('.hamburger nav').slideToggle('slow');
    $('.hamburger_button span').toggleClass('fa-bars')
    .toggleClass('fa-times');
  });
});
