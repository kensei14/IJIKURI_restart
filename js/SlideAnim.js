/**
 * @author Mack
 */

function setAnim() {
	var target_top,
		target_focus,
		target_bottom;
	var ml = $("#member_list").children(), 	//ml = Member_List ml_l=Member_LIist_Length
		ml_l = ml.length,
		ml_targets = new Array(ml_l),
		ml_width = $("#elem4").width() + parseInt($("#elem4").css("padding").replace("px","")) * 2,
		ml_height = $("#elem4").height() + parseInt($("#elem4").css("padding").replace("px","")) * 2,
		ml_left,
		ml_top;
	var pre_focus = 0;
	var anim_style = false;

	$('a[name=slide]').click(function(e) {
		e.preventDefault();

		var focus_elem = $(this).attr('href'), //動かす対象の円コンテンツ
			focus_elem_height; 
		var find = false;

		ml_top  = parseInt($("#elem4").css("top").replace("px",""));
		ml_left = parseInt($("#elem4").css("left").replace("px",""));
		target_top = ml_top - pageHeight * 2;
		target_bottom = parseInt($("#elem100").css("top").replace("px",""));

		for (var i=0; i < ml_l; i++) {
			if (focus_elem == ("#" + $(ml[i]).attr("id"))) {
				find = true;
				focus_elem_height = $(focus_elem).height() + parseInt($(focus_elem).css("padding").replace("px","")) * 2;
				target_focus = ml_top - (focus_elem_height - ml_height)/2;
										
				ml_targets[i] = target_focus;
				if (i < pre_focus) { anim_style = true; }
				else { anim_style = false; }
				pre_focus = i;
			} else if (find) {
				ml_targets[i] = target_bottom;
			} else {
				ml_targets[i] = target_top;
			}
		}
		
		if (anim_style) { nextAnim(ml_l-1, anim_style); }
		else { nextAnim(0, anim_style); }
		$("#elem4").animate(
			{ 'left':  parseInt($(focus_elem).css("left").replace("px","")) - ml_width - 30 + 'px' },
			{ 'duration': 400, 'easing': 'linear' }
		);
		
		member_lock.lock = true;
		member_lock.pos_origin = ml_left;
	});
	
	function nextAnim(p, anim_style) {
		if (ml[p] == "undefined" | ml[p] == null) {
			return false;
		}
		else {
			$(ml[p]).animate(
					{ 'top': ml_targets[p] + 'px' },
					300,
					'linear',
					function() {
						if (anim_style) { nextAnim(p-1, anim_style); } 
						else { nextAnim(p+1, anim_style); }
					}
			);
		}
	}
}
