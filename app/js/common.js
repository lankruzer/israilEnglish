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