$(document).ready(function() {

	$('.nav-button').on('click', function() {
		if ($(this).hasClass('active') == false) {
			for (var i = 0; i < $('.nav-list').children().length; i++) {
				$('.nav-list').children().eq(i).removeClass('active');
			}

			$(this).addClass('active');

			switch ($(this).text()) {
				case 'Left':

				break;

				case 'Center':
					$('header').children().eq(0).attr(
						'src', 'assets/images/layer-title.png'
					).removeClass('header-title2').addClass('header-title');
					$('header').children().eq(1).attr(
						'src', 'assets/images/layer-border-texture-2.png'
					).removeClass('header-pic2').addClass('header-pic');
					$('header').removeClass('header');
				break;

				case 'Right':
					console.log($('header').children());
					$('header').children().eq(0).attr(
						'src', 'assets/images/title.png'
					).removeClass('header-title').addClass('header-title2');
					$('header').children().eq(1).attr(
						'src', 'assets/images/cutout-shadow.png'
					).removeClass('header-pic').addClass('header-pic2');
					$('header').addClass('header');
				break;
			}
		}
	});
});