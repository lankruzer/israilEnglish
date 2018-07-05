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
	if (document.querySelector('.btn-mobile-menu')) {
		document.querySelector('.btn-mobile-menu').addEventListener('click', function(event) {
			this.classList.toggle('btn-mobile-menu_active');
			document.querySelector('.header-links-js').classList.toggle('header-links-js_show');
			document.body.classList.toggle('hide-scroll');
		});
	}
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
			$('.faq-list-question').removeClass('is-active');
			$('.faq-list__answer').slideUp(250);
			$(this).addClass('is-active');
			$($(this).next()).slideToggle(250);
		} else {
			$('.faq-list__answer').slideUp(250);
			$(this).removeClass('is-active');
			$($(this).next()).slideUp(250);
		}
	})
}

// form-support
if (document.querySelector('.support-form')) {
	$('.support-form-label').click(function() {
		if (!$(this).hasClass('is-checked')) {
			$('.support-form-label').removeClass('is-checked');
			$(this).addClass('is-checked');

			$('#step-2').slideDown(250);
			scrollTo('#step-2');
		}
	})

	$('#step-2 .btn').click(function() {
		if ($('#step-2 input').val().length > $('#step-2 input').attr('minlength')) {
			$('#step-3').slideDown(250);
			scrollTo('#step-3');
		}
	})

	// popup thank
	$( '.support-form' ).submit(function(event) {
		event.preventDefault();
		$( '.overlay' ).addClass( 'overlay_active' );
		$( 'html, body' ).toggleClass( 'hide-scroll' )
		$( '.popup-form__info' ).addClass( 'popup-form_active' );
	});
}

// smooth scrolling
function scrollTo(elem) {
	$('html, body').animate({
		scrollTop: $(elem).offset().top
	}, 1000);
	$(elem).find('input').focus();
}

// close popup form on click close
$( '.popup-form__close' ).click(function(event) {
	event.preventDefault();
	$( 'html, body' ).toggleClass( 'hide-scroll' )
	$( '.overlay' ).removeClass( 'overlay_active' );
	$( '.popup-form' ).removeClass( 'popup-form_active' );
});
// /close popup form on click close

// close popup form on click outside
$( '.overlay__content' ).click(function(event) {
	if ( $( '.overlay__content' ).has(event.target).length === 0 ){
		$('.overlay').removeClass('overlay_active');
		$( 'html, body' ).toggleClass( 'hide-scroll' )
		$('.popup-form').removeClass('popup-form_active');
	}
});
// /close popup form on click outside

// close popup on press Esc
$(document).keyup(function(event) {
	if ( event.keyCode == 27 ) {
		$( '.overlay' ).removeClass( 'overlay_active' );
		$( '.popup-form' ).removeClass( 'popup-form_active' );
		$( 'html, body' ).toggleClass( 'hide-scroll' );		
	}
});
// /close popup on press Esc

