$(function(){
//rateYo
$(".rate-star").rateYo({
    rating: 4,
    starWidth: "12px",
    readOnly: true
  });

//range-slider
 $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        from: 0,
        to: 600,
        prefix: "$"
    });

$('.product-slider__inner').slick({
	dots: true,
	arrows: false,
	slidesToShow: 4,
	slidesToScroll: 4,
    responsive: [
        {
          breakpoint: 1900,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
            breakpoint: 1441,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
            breakpoint: 800,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },

    ]   
});

//tabs
$('.product-one__tabs .tab, .settings__tabs .tab').on('click', function(event) {
var id = $(this).attr('data-id');
    $('.product-one__tabs, .settings__tabs').find('.tab-item').removeClass('active-tab').hide();
    $('.product-one__tabs .tabs, .settings__tabs .tabs').find('.tab').removeClass('active');
    $(this).addClass('active');
    $('#'+id).addClass('active-tab').fadeIn();
    return false;
});
//tabs-end

$('.icon-th-list').on('click', function(){
    $('.product__item').addClass('list');
    $('.icon-th-list').addClass('active');
    $('.icon-th-large').removeClass('active');
});
$('.icon-th-large').on('click', function(){
    $('.product__item').removeClass('list');
    $('.icon-th-large').addClass('active');
    $('.icon-th-list').removeClass('active');
});

$('.header__btn-menu').on('click', function(){
    $('.header__box').toggleClass('active');
});

$('.menu__btn').on('click', function(){
    $('.menu__list').slideToggle();
});

//fancybox
$(".fancybox").fancybox();

//jquery form style
$('input[type="file"], select').styler({
    fileBrowse: "Choose File",
    filePlaceholder: "No File Choosen"
});

//mixitup
var mixer = mixitup('.products__inner-box');
});