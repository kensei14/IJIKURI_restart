/**
 * @author Mack
 */

function setAnim() {
	var default_left = parseInt($("#elem4").css("left").replace("px",""));
	//var default_width = parseInt($("#elem4").css("width").replace("px",""));
	var default_width = parseInt($("#elem4").css("width").replace("px","")) + parseInt($("#elem4").css("padding").replace("px","")) * 2;
	
	$('a[name=slide]').click(function(e) {
		e.preventDefault();

		var fading_elem = $(this).attr('href');

		var target_left = parseInt($(fading_elem).css("left").replace("px","")) - default_width;
		$("#elem4").animate(
			{ 'left':  target_left + 'px' },
			{ 'duration': 400, 'easing': 'linear' }
		);

		var default_top = parseInt($("#elem4").css("top").replace("px",""));
		$(fading_elem).animate(
			{ 'top': default_top + 'px' },
			{ 'duration': 400, 'easing': 'linear' }
		);
	});
}
