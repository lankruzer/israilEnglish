document.addEventListener("DOMContentLoaded", function(event) {

	// play video

	if (document.querySelector('video')) {
		document.querySelector('video').addEventListener('click', function(event) {
			document.querySelector('.video-play').classList.toggle('video-play_hide');
			if (document.querySelector('.video-play').classList.contains('video-play_hide')) {
				document.querySelector('.video video').play();
			} else {
				document.querySelector('.video video').pause();
			}
		});
	}

	// /play video

	// mobile menu
	document.querySelector('.btn-mobile-menu').addEventListener('click', function(event) {
		this.classList.toggle('btn-mobile-menu_active');
		document.querySelector('.header-links-js').classList.toggle('header-links-js_show');
		document.body.classList.toggle('hide-scroll');
	});
	// mobile menu
	
})

// tabs
if (document.querySelector('.period-tabs-nav')) {
	var tabsNavContainer = $('.period-tabs-nav');
	var tabsNavButtons = $('.period-tabs-nav-li');
	var tabsCurrentIndex = $(tabsNavContainer).find('.is-active').index('.period-tabs-nav-li');
	var tabsContent = $('.period-tabs-content');


	$(tabsNavButtons).click(function() {
		if (!$(this).hasClass('is-active')) {
			$(tabsNavButtons).removeClass('is-active');
			$(this).addClass('is-active');
			tabsCurrentIndex = $(this).index('.period-tabs-nav-li');

			$(tabsContent).each(function(idnex, item) {
				var tabsContentItems = $(item).find('.period-tabs-content-li');	
				$(tabsContentItems).removeClass('is-show');
				$($(tabsContentItems[tabsCurrentIndex])).addClass('is-show');
			})
		}
	})
}

// faq
if (document.querySelector('.faq-list')) {
	$('.faq-list-question').click(function(){
		if (!$(this).hasClass('is-active')) {
			$('.faq-list-question').not($(this)).removeClass('is-active');
			$('.faq-list__answer').not($(this).next()).slideUp(250);
			$(this).addClass('is-active');
			$($(this).next()).slideToggle(250);
		}
	})
}
