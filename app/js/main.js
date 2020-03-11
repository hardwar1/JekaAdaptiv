$(function(){
//весь код писать внутри что бы дом загрузился первым
$('.wrapper').addClass('loaded');

$('.icon-menu').click(function(event){
  $(this).toggleClass('active');
  $('.menu__body').toggleClass('active')
  $('body').toggleClass('lock');
});


  $('.slider__body').slick({
    arrows: false,
    accessibility: 1,
    dots: true,
    adaptiveHeight: true,
    slideToShow: 1,
    autoplaySpeed:3000
  });



});