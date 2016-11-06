$(document).ready(function() {

	$('.nav-button').on('click', function() {
		if ($(this).hasClass('active') == false) {
			for (var i = 0; i < $('.nav-list').children().length; i++) {
				$('.nav-list').children().eq(i).removeClass('active');
			}

			$(this).addClass('active');
		}
	});
});