function alerted(){
	$('.alerted > .alert-box > .close-btn > .close-text').click(function(){
		$('.alerted').removeClass('active');
	})
}

function mobile_menu_active(){
	$('.menu-box-1-1 > .down-menu > ul > li > span').click(function(){
		var $click = $(this).parent();
		var $active = $('.menu-box-1-1 > .down-menu > ul').find('> .active');
		var $close_btn = $('.menu-box-1-1 > .down-menu > .close-btn');
		if ( $click.hasClass('active')){
			$click.removeClass('active');
			$close_btn.removeClass('active');
		}
		else {
			$active.removeClass('active');
			$click.addClass('active');
			$close_btn.addClass('active');
		}
		$('.menu-box-1-1 > .down-menu > .close-btn').click(function(){
			var $active = $('.menu-box-1-1 > .down-menu > ul').find('> .active');
			$active.removeClass('active');
			$(this).removeClass('active');
		})
	});
	
	$('.menu-box-1-1 > .down-menu > ul > li > .down-menu-2 > li').click(function(){
		var $down_menu_2 = $(this).find('> .down-menu-3');
		var $active = $('.menu-box-1-1 > .down-menu > ul > li > .down-menu-2 > li').find('> .active');
		var $arrow = $(this).find(' > .arrow')
		if ( $down_menu_2.hasClass('active')){
			$down_menu_2.removeClass('active');
			$arrow.removeClass('active');
		}
		else {
			$active.removeClass('active');
			$down_menu_2.addClass('active');
			$arrow.addClass('active');
		}
	});
	
};

$(function () {
  alerted();
  mobile_menu_active();
});
