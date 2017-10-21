
$(document).ready(function(){

	//FUNCTION CHANGING IMG SOCIAL MEDIA : HOVER
	$('.header__social-media__insta__img').mouseenter(function(){
		$(this).attr('src', 'img/main/instagram-color.png');
	}).mouseleave(function(){
		$(this).attr('src', 'img/main/instagram-whitepp.png');
	});


	$('.btn').mouseenter(function(){
		$(this).addClass('animated pulse infinite');
	}).mouseleave(function(){
		$(this).removeClass('animated pulse infinite');
	});


	//SCROLL CLICK BTN CONTACT
	$(function () {
	  $('.header a').on('click', function(e) {
	    e.preventDefault();
	    let hash = this.hash;
	    $('html, body').animate({
	      scrollTop: $(this.hash).offset().top
	    }, 1000, function(){
	      window.location.hash = hash;
	    });
	  });
	});

}) // end document.ready


