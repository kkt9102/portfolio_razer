console.clear();

/*
setTimeout(function() {
  $(window).scrollTop(0);
}, 500);
*/
function popup_start() {

  $('.popup-2 > .newsletter').addClass('active');
  $('.popup-background').addClass('active');
  $('.popup-1').addClass('active');
  $('.notebook-page').addClass('active');
  $('html').addClass('active');
}

function popup_1() {
    $('.popup-1 .close-btn').click(function () {
    $('.popup-1').removeClass('active');
    $('.notebook-page').removeClass('active');
  })
}

function popup_2() {
  $('.popup-2 > .newsletter > .close-btn').click(function () {
    $('.popup-2 > .newsletter').removeClass('active');
    $('.popup-background').removeClass('active');
    $('html').removeClass('active');
  })
}

function alerted(){
	$('.alerted > .alert-box > .close-btn > .close-text').click(function(){
		$('.alerted').removeClass('active');
	})
}


$(function () {
  popup_start();
  popup_1();
  popup_2();
  alerted();
})