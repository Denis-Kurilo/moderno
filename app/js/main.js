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
	slidesToScroll: 4
});

//mixitup
var mixer = mixitup('.products__inner-box');

});