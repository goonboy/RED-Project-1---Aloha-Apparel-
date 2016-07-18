// products slider

$(function(){
  $('.bxslider').bxSlider({
    speed: 250,
    pause: 2000,
    controls: false,
    auto: true,
    minSlides: 1,
    maxSlides: 4,
    slideMargin: 0
  });
});

// smooth scrolling

$(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});

// mailling list email alert

$('form').submit(function(event) {

 event.preventDefault();

 if($('input').val() === '') {
   alert('Please enter an email to subscribe.');
 }
 else {
   alert('Thanks for subscribing!');
 }
});
