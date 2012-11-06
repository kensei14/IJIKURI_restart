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
		ml_top;
	var pre_focus = 0;

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
				ml_targets[i] = target_focus;
/*				$(focus_elem).animate(
					{ 'top': target_focus + 'px' },
					{ 'duration': 300, 'easing': 'linear' }
				);
*/
			} else if (find) {
				ml_targets[i] = target_bottom;
/*				$(ml[i]).animate(
					{ 'top': target_bottom + 'px' },
					{ 'duration': 400, 'easing': 'linear' }
				);
*/
			} else {
				ml_targets[i] = target_top;
/*				$(ml[i]).animate(
					{ 'top': target_top + 'px' },
					{ 'duration': 400, 'easing': 'linear' }
				);
*/
			}
			nextAnim(0);	
		}
	});
	
	function nextAnim(p) {
		if (ml[p] == "undefined" | ml[p] == null) {
			return false;
		}
		else {
			$(ml[p]).animate(
					{ 'top': ml_targets[p] + 'px' },
					{ 'duration': 400, 'easing': 'linear' },
					nextAnim(p+1)
			);
		}
	}
}
