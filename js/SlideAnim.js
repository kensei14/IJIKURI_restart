/**
 * @author Mack
 */

function setAnim() {
	/*
	var default_left = parseInt($("#elem4").css("left").replace("px",""));
	var default_width = $("#elem4").width() + parseInt($("#elem4").css("padding").replace("px","")) * 2;
	var default_height = $("#elem4").height() + parseInt($("#elem4").css("padding").replace("px","")) * 2;
	*/
		//var default_width = parseInt($("#elem4").css("width").replace("px",""));
	
	var target_top,
		target_focus,
		target_bottom = parseInt($("#elem100").css("top").replace("px",""));
	//ml = Member_List ml_l=Member_LIist_Length
	var ml = $("#member_list").children(),
		ml_l = ml.length,
		ml_targets = new Array(ml_l),
		ml_width = $("#elem4").width() + parseInt($("#elem4").css("padding").replace("px","")) * 2,
		ml_height = $("#elem4").height() + parseInt($("#elem4").css("padding").replace("px","")) * 2,
		ml_top;

	$('a[name=slide]').click(function(e) {
		e.preventDefault();

		var focus_elem = $(this).attr('href'), //動かす対象の円コンテンツ
			focus_elem_height; 
		var find = false;
		
		ml_top  = parseInt($("#elem4").css("top").replace("px",""));
		target_top = ml_top - pageHeight;
		target_bottom = parseInt($("#elem100").css("top").replace("px",""));

		for (var i=0; i < ml_l; i++) {
			if (focus_elem == ("#" + $(ml[i]).attr("id"))) {
				find = true;
				focus_elem_height = $(focus_elem).height() + parseInt($(focus_elem).css("padding").replace("px","")) * 2;
				target_focus = ml_top - (focus_elem_height - ml_height)/2;
										
				$("#elem4").animate(
					{ 'left':  parseInt($(focus_elem).css("left").replace("px","")) - ml_width - 30 + 'px' },
					{ 'duration': 400, 'easing': 'linear' }
				);
				$(focus_elem).animate(
					{ 'top': target_focus + 'px' },
					{ 'duration': 300, 'easing': 'linear' }
				);
			} else if (find) {
				//ml_targets[i] = target_bottom;
				//alert($(ml[i]).attr("id") + "  " + target_top);
				$(ml[i]).animate(
					{ 'top': target_bottom + 'px' },
					{ 'duration': 400, 'easing': 'linear' }
				);
			} else {
				//ml_targets[i] = target_top;
				//alert($(ml[i]).attr("id") + "  " + target_bottom);
				$(ml[i]).animate(
					{ 'top': target_top + 'px' },
					{ 'duration': 400, 'easing': 'linear' }
				);
			}
		}

/*
		var target_left = parseInt($(fading_elem).css("left").replace("px","")) - default_width - 30;
		var fading_elem_height = parseInt($(fading_elem).css("height").replace("px","")) + parseInt($(fading_elem).css("padding").replace("px","")) * 2;
		$("#elem4").animate(
			{ 'left':  target_left + 'px' },
			{ 'duration': 400, 'easing': 'linear' }
		);

		var default_top = parseInt($("#elem4").css("top").replace("px",""));
		$(fading_elem).animate(
			{ 'top': default_top - (fading_elem_height - default_height)/2 + 'px' },
			{ 'duration': 400, 'easing': 'linear' }
		);
*/

		/*
		var find = false;
		for (var i; i < 4; i++) {
			//とりあえず０を入れる。
			top = 0;
			//発見したら表示する。
			if () { top = hoge; break; }
			top = default;
		}
		*/
	});
}
